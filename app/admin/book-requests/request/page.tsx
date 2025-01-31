import React from "react";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import BorrowRequests from '../../../../components/admin/BorrowRequests';

const Page = () => {
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/book-requests">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BorrowRequests />
      </section>
    </>
  );
};
export default Page;
