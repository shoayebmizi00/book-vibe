import Image from "next/image";
import Link from "next/link";
import { IBook } from "../type/bookDataType";
import ReadBookBtn from "./ReadBookBtn";
import WishListBtn from "./WishListBtn";

interface BookDetailsCardProps {
  book: IBook;
}

const BookDetailsCard = ({ book }: BookDetailsCardProps) => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg md:grid-cols-2">
        {/* Book Image */}
        <div className="relative flex min-h-100 items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 p-8">
          <div className="relative h-full w-full">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              sizes="256px"
              className="object-contain drop-shadow-xl"
            />
          </div>

          {/* Category */}
          <span className="absolute left-5 top-5 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow">
            {book.category}
          </span>

          {/* Rating */}
          <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-black/75 px-3 py-2 text-sm font-semibold text-white">
            <span className="text-yellow-400">★</span>
            {book.rating}
          </div>
        </div>

        {/* Book Information */}
        <div className="flex flex-col p-6 sm:p-8">
          {/* Title */}
          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-2 text-sm text-gray-500">
            Written by{" "}
            <span className="font-semibold text-gray-800">{book.author}</span>
          </p>

          {/* Description */}
          <p className="mt-6 text-sm leading-7 text-gray-600">{book.review}</p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Information */}
          <div className="mt-7 grid grid-cols-2 gap-4 border-y border-gray-100 py-5">
            <div>
              <p className="text-xs text-gray-400">Total Pages</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Published</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Publisher</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Category</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                {book.category}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-auto flex gap-3 pt-6">
            <Link
              href="/books"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              ← Back
            </Link>

            <div className="flex justify-between items-center gap-4">
              <ReadBookBtn book={book}/>
              <WishListBtn book={book}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsCard;
