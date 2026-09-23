import Image from "next/image";
import Link from "next/link";
import { IBook } from "../type/bookDataType";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <section className="w-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

        {/* Book Image */}
        <div className="relative h-44 w-full overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50 sm:h-52">
          <div className="relative mx-auto h-full w-28 sm:w-32">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              sizes="128px"
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Category */}
          <div className="absolute left-2 top-2">
            <span className="rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold text-indigo-600 shadow-sm backdrop-blur-sm">
              {book.category}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-[9px] font-medium text-white">
            <span className="text-yellow-400">★</span>
            {book.rating}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-3">

          {/* Book Name */}
          <h2 className="line-clamp-2 min-h-10 text-sm font-bold leading-5 text-gray-900 transition-colors group-hover:text-indigo-600 sm:text-base">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 truncate text-[10px] text-gray-500 sm:text-xs">
            by{" "}
            <span className="font-medium text-gray-700">
              {book.author}
            </span>
          </p>

          {/* Tags */}
          <div className="mt-2 flex flex-wrap gap-1">
            {book.tags.slice(0, 2).map((tag: string) => (
              <span
                key={tag}
                className="rounded bg-indigo-50 px-1.5 py-0.5 text-[9px] font-medium text-indigo-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Information */}
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
            <div>
              <p className="text-[9px] text-gray-400">Pages</p>
              <p className="mt-0.5 text-[10px] font-semibold text-gray-800 sm:text-xs">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-[9px] text-gray-400">Published</p>
              <p className="mt-0.5 text-[10px] font-semibold text-gray-800 sm:text-xs">
                {book.yearOfPublishing}
              </p>
            </div>
          </div>

          {/* Button */}
          <Link
            href={`/books/${book.bookId}`}
            className="mt-3 block w-full rounded-lg bg-indigo-600 px-2 py-2 text-center text-[10px] font-semibold text-white transition-all duration-300 hover:bg-indigo-700 sm:text-xs"
          >
            View Details →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookCard;