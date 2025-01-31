"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
      onClick={() => router.back()}
    >
      ← Go Back
    </Button>
  );
};

export default BackButton;