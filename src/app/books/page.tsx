import { IBook } from "@/src/type/bookDataType";
import React from "react";
import BookCard from "../../components/BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  return await res.json();
};

const Books = async () => {
  const booksData = await getBooks();
  return (
    <section className="container mx-auto my-20 grid sm:grid-cols-5 grid-cols-1 gap-4">
      {booksData.map((book: IBook) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </section>
  );
};

export default Books;
