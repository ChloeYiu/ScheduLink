import { copyFile, readdirSync } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const dir = searchParams.get("dir");

  console.log(readdirSync("./cal").length);

  if (dir !== null) {
    copyFile(
      "../output.png",
      `./cal/calendar_${readdirSync("./cal").length}.png`,
      (error) => {
        if (error) throw error;
        return new NextResponse("Error uploading file");
      }
    );
    return new NextResponse("File uploaded");
  }
  return new NextResponse("Error: No dir given");
}
