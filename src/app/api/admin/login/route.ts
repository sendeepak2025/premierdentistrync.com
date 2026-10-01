import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Validate admin credentials
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { error: "Admin credentials not configured" },
        { status: 500 }
      );
    }

    // Check email
    if (email !== adminEmail) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Check password (for production, store hashed passwords)
    const isPasswordValid = password === adminPassword;
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: adminEmail, role: 'admin' },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      user: { email: adminEmail, role: 'admin' }
    });

    // Set HTTP-only cookie
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400, // 24 hours
      path: '/'
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}