import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../../database/drizzle";
import { borrowRequests } from "../../../../../database/schema";
import { eq } from "drizzle-orm";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // Borrow request ID

  if (req.method !== "PATCH") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    await db
      .update(borrowRequests)
      .set({ status })
      .where(eq(borrowRequests.id, id as string));

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error updating borrow request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
