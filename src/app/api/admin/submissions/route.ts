import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

// Verify admin token middleware
function verifyToken(req: NextRequest) {
  const token = req.cookies.get("admin-token")?.value;

  if (!token) {
    return false;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded;
  } catch {
    return false;
  }
}

export async function GET(req: NextRequest) {
  try {
    // Verify admin authentication
    const user = verifyToken(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get query parameters
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "100", 10);
    const status = searchParams.get("status");
    const search = searchParams.get("search")?.trim();

    // Connect to database
    const { db } = await connectToDatabase();

    // Build query
    const query: Record<string, any> = {};
    if (status && status !== "all") {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { service: { $regex: search, $options: "i" } },
        { notes: { $regex: search, $options: "i" } },
      ];
    }

    // Get total count
    const total = await db.collection("form-submissions").countDocuments(query);

    // Get submissions with pagination
    const submissions = await db
      .collection("form-submissions")
      .find(query)
      .sort({ submittedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      success: true,
      data: {
        submissions,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    console.error("Submissions API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}

// Update submission status
export async function PATCH(req: NextRequest) {
  try {
    // Verify admin authentication
    const user = verifyToken(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { error: "Missing id or status" },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();

    // Update submission
    const result = await db.collection("form-submissions").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Status updated successfully",
    });
  } catch (error) {
    console.error("Status update error:", error);
    return NextResponse.json(
      { error: "Failed to update status" },
      { status: 500 }
    );
  }
}

// Delete submission
export async function DELETE(req: NextRequest) {
  try {
    const user = verifyToken(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    let id = searchParams.get("id");

    if (!id) {
      try {
        const body = await req.json();
        id = body.id;
      } catch {
        // body may be empty
      }
    }

    if (!id) {
      return NextResponse.json({ error: "Missing submission ID" }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const result = await db.collection("form-submissions").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Submission deleted successfully",
    });
  } catch (error) {
    console.error("Delete submission error:", error);
    return NextResponse.json(
      { error: "Failed to delete submission" },
      { status: 500 }
    );
  }
}