import { IBook } from "@/src/type/bookDataType";
import React from "react";
import BookCard from "../BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  return await res.json();
};

const Books = async () => {
  const booksData = await getBooks();
  return (
    <section className="">
      <div className="container mx-auto text-center py-10">
        <h4 className="font-bold text-2xl text-blue-500">Our Collection</h4>
        <h2 className="font-bold text-5xl py-4">Explore All Books</h2>
        <p>Discovering amazing stories, timeless classics and inspiring books from talented authors.</p>
      </div>
      <div className="container mx-auto my-5 grid sm:grid-cols-5 grid-cols-1 gap-4">
        {booksData.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
