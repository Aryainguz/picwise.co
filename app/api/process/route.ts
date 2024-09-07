import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  try {
    const { buffer, width, height, format } = await req.json();

    if (!buffer || !width || !height || !format) {
      return NextResponse.json({ error: "Invalid input data." }, { status: 400 });
    }

    // Convert buffer to a Buffer object if it's a base64-encoded string
    const imageBuffer = Buffer.from(buffer, 'base64');

    const processedImage = await sharp(imageBuffer)
      .resize(width, height, { fit: sharp.fit.fill })  // Stretch image without cropping
      .toFormat(format)
      .toBuffer();

    return NextResponse.json({ image: processedImage.toString("base64") });
  } catch (error) {
    console.error("Error processing image:", error);
    return NextResponse.json({ error: "Failed to process image." }, { status: 500 });
  }
}
