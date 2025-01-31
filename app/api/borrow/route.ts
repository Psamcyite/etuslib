export async function POST(req: Request) {
    try {
      const { bookId, userId } = await req.json();
  
      if (!bookId || !userId) {
        return new Response(JSON.stringify({ error: "Missing bookId or userId" }), { status: 400 });
      }
  
      console.log("Processing borrow request:", { bookId, userId });
  
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      console.error("Error processing borrow request:", error);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
  }
  