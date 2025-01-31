import ImageKit from "imagekit";
import config from "../../../lib/config";
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: config.env.imagekit.publicKey,
  privateKey: config.env.imagekit.privateKey,
  urlEndpoint:config.env.imagekit.urlEndpoint,
});

export async function GET(req: Request) {
  try {
    console.log(" Generating imagekit authentication parameters...");
    const authParams = imagekit.getAuthenticationParameters();
    return NextResponse.json(authParams);
  } catch (error: any) {
    console.error("Error generating Imagekit authentication parameters:", error);
    return NextResponse.json({ error: "getAuthenticationParameters" }, { status: 500 });
  }
}
