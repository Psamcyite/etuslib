import React from "react";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage?: string;
}

interface Props {
  title: string;
  books: Book[];
  isAdmin?: boolean;
  onEdit?: (bookId: string) => void;
  onDelete?: (bookId: string) => void;
  isLoading?: boolean;
}

const BookList: React.FC<Props> = ({ 
  title, 
  books, 
  isAdmin = false, 
  onEdit, 
  onDelete, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <section className="p-4">
        <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
        <p className="text-gray-400 mt-4">Loading books...</p>
      </section>
    );
  }

  if (!books || books.length === 0) {
    return (
      <section className="p-4">
        <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
        <p className="text-gray-400 mt-4">No books available.</p>
      </section>
    );
  }

  return (
    <section className="p-4">
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {books.map((book) => (
          <div key={book.id} className="relative border rounded-lg p-3 shadow-md">
            <BookCard {...book} />

            {isAdmin && (
              <div className="absolute top-2 right-2 flex gap-2">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
                  onClick={() => onEdit?.(book.id)}
                >
                  Edit
                </Button>
                <Button 
                  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
                  onClick={() => onDelete?.(book.id)}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
};

export default BookList;
