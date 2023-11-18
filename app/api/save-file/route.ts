import { copyFile } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // console.log("Hi");
  const { searchParams } = new URL(req.url);
  const dir = searchParams.get("dir");
  if (dir !== null) {
    copyFile(
      "C:/Users/chloe_/Desktop/output.png",
      "C:/Users/chloe_/Desktop/schedulink/cal",
      (error) => {
        if (error) throw error;
      }
    );
    console.log("Success");
    return new NextResponse("Yay");
  }
  return new NextResponse("No dir given");
}
