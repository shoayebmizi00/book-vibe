"use client";

import React, { useContext } from "react";
import { IBook } from "../type/bookDataType";
import { BooksContext } from "../context/BooksContex";
import { toast } from "react-toastify";

const ReadBookBtn = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext) as {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  } | null;

  if (!context) {
    throw new Error("ReadBookBtn must be inside BooksProvider");
  }

  const { readBooks, setReadBooks } = context;
  console.log(readBooks + "From readBooks");

  const handleReadBook = () => {
    const alreadyRead = readBooks.some(
      (item) => item.bookId === book.bookId
    );

    if (alreadyRead) {
      toast.info(`${book.bookName} is already in your read list`);
      return;
    }

    setReadBooks((prev) => [...prev, book]);

    toast.success(`${book.bookName} is already read`);
  };

  return (
    <button
      onClick={handleReadBook}
      className="cursor-pointer rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg"
    >
      Read Book
    </button>
  );
};

export default ReadBookBtn;