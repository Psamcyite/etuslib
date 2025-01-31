"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface BorrowRequest {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  book: {
    id: string;
    title: string;
    author: string;
  };
  status: "pending" | "approved" | "rejected";
}

const BorrowRequests = () => {
  const [requests, setRequests] = useState<BorrowRequest[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBorrowRequests();
  }, []);

  const fetchBorrowRequests = async () => {
    try {
      const response = await fetch("/api/admin/borrow-requests");
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setRequests(data.requests);
    } catch (error) {
      console.error("Error fetching borrow requests:", error);
    }
  };
  

  const handleUpdateRequest = async (requestId: string, status: "approved" | "rejected") => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/borrow-requests/${requestId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
  
      const data = await response.json();
      if (data.success) {
        toast({ title: `Request ${status}`, description: `The borrow request has been ${status}.` });
  
        // Update UI by filtering out the updated request
        setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
      } else {
        toast({ title: "Error", description: data.error || "Something went wrong", variant: "destructive" });
      }
    } catch (error) {
      console.error("Error updating request", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Pending Borrow Requests</h2>

      {requests.length === 0 ? (
        <p className="text-gray-500">No pending requests.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li key={req.id} className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
              <div>
                <h3 className="font-bold">{req.book.title} by {req.book.author}</h3>
                <p className="text-gray-600">Requested by: {req.user.name} ({req.user.email})</p>
              </div>

              <div className="flex gap-2">
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() => handleUpdateRequest(req.id, "approved")}
                  disabled={loading}
                >
                  Approve
                </Button>

                <Button
                  className="bg-red-500 hover:bg-red-600"
                  onClick={() => handleUpdateRequest(req.id, "rejected")}
                  disabled={loading}
                >
                  Reject
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BorrowRequests;
