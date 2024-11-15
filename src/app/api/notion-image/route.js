import notion from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pageId = searchParams.get("pageId");

  const page = await notion.pages.retrieve({ page_id: pageId });
  const url = page.cover?.file?.url || page.cover?.external?.url;
  const expiry = page.cover?.file?.expiry_time;

  return NextResponse.json({ url, expiry });
}
