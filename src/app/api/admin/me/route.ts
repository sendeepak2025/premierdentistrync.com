import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("admin-token")?.value;

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      email: string;
      role: string;
    };

    return NextResponse.json({
      authenticated: true,
      user: {
        email: decoded.email,
        role: decoded.role || "admin",
      },
    });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
