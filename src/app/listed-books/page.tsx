"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaRegUser,
  FaRegCalendarAlt,
  FaRegFileAlt,
} from "react-icons/fa";

import { BooksContext } from "@/src/context/BooksContex";
import { IBook } from "@/src/type/bookDataType";

type Tab = "read" | "wishlist";

type SortOption = "" | "rating" | "year" | "pages";

interface BooksContextType {
  readBooks: IBook[];
  wishList: IBook[];
}

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState<Tab>("read");
  const [sortBy, setSortBy] = useState<SortOption>("");

  const { readBooks, wishList } = useContext(
    BooksContext
  ) as BooksContextType;

  // Which list should we display?
  const books = activeTab === "read" ? readBooks : wishList;

  // Create a new array before sorting
  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    if (sortBy === "year") {
      return b.yearOfPublishing - a.yearOfPublishing;
    }

    if (sortBy === "pages") {
      return b.totalPages - a.totalPages;
    }

    return 0;
  });

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="mb-10">
        <h1 className="text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Listed Books
        </h1>
      </div>

      {/* Sort Button */}
      <div className="mb-6 flex justify-center md:justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="cursor-pointer rounded-lg bg-emerald-500 px-5 py-3 font-medium text-white outline-none"
        >
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="year">Year</option>
          <option value="pages">Pages</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          {/* Read Books */}
          <button
            onClick={() => setActiveTab("read")}
            className={`relative pb-4 text-lg font-semibold transition ${
              activeTab === "read"
                ? "text-gray-900"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            Read Books

            {activeTab === "read" && (
              <span className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-emerald-500" />
            )}
          </button>

          {/* Wishlist */}
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`relative pb-4 text-lg font-semibold transition ${
              activeTab === "wishlist"
                ? "text-gray-900"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            Wishlist Books

            {activeTab === "wishlist" && (
              <span className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-emerald-500" />
            )}
          </button>
        </div>
      </div>

      {/* Books */}
      <div className="mt-6 space-y-5">
        {sortedBooks.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
            <p className="text-xl font-semibold text-gray-500">
              {activeTab === "read"
                ? "No read books yet."
                : "No wishlist books yet."}
            </p>
          </div>
        ) : (
          sortedBooks.map((book) => (
            <div
              key={book.bookId}
              className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg md:flex-row md:p-8"
            >
              {/* Book Image */}
              <div className="flex shrink-0 justify-center md:w-48">
                <div className="relative h-56 w-36 overflow-hidden rounded-lg bg-gray-100 shadow-md">
                  <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Book Information */}
              <div className="flex flex-1 flex-col">
                {/* Book Name */}
                <h2 className="text-2xl font-bold text-gray-800">
                  {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-2 text-base font-medium text-gray-700">
                  By: {book.author}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                    {book.tags}
                  </span>
                </div>

                {/* Metadata */}
                <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaRegUser />
                    <span>Publisher: {book.publisher}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaRegFileAlt />
                    <span>Pages: {book.totalPages}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt />
                    <span>Year: {book.yearOfPublishing}</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                      Category: {book.category}
                    </span>

                    <span className="rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-600">
                      Rating: {book.rating}
                    </span>
                  </div>

                  <Link
                    href={`/books/${book.bookId}`}
                    className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 hover:shadow-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ListedBooks;