import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database/drizzle";
import { borrowRequests, users, books } from "@/database/schema";
import { eq } from "drizzle-orm";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    console.log("Fetching borrow requests...");

    const requests = await db
      .select({
        id: borrowRequests.id,
        status: borrowRequests.status,
        user: {
          id: users.id,
          name: users.name,
          email: users.email,
        },
        book: {
          id: books.id,
          title: books.title,
          author: books.author,
        },
      })
      .from(borrowRequests)
      .leftJoin(users, eq(borrowRequests.userId, users.id))
      .leftJoin(books, eq(borrowRequests.bookId, books.id));

    console.log("Requests fetched:", requests);

    return res.status(200).json({ requests });
  } catch (error: any) {
    console.error("Error fetching borrow requests:", error.message || error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
