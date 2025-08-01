import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const upload = await prisma.upload.create({
      data: body,
    });

    return NextResponse.json(upload);
  } catch (error) {
    console.log("upload", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
