import { NextResponse } from "next/server";
import { db } from "../../../database/drizzle";
import { books } from "../../../database/schema"

export async function GET() {
  try {
    const allBooks = await db.select().from(books);
    return NextResponse.json(allBooks);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newBook = await db.insert(books).values(body).returning();
    return NextResponse.json(newBook);
  } catch (error) {
    return NextResponse.json({ error: "Failed to add book" }, { status: 500 });
  }
}
