"use client";

import React, { useContext } from "react";
import { IBook } from "../type/bookDataType";
import { BooksContext } from "../context/BooksContex";
import { toast } from "react-toastify";

const WishlistBtn = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext) as {
    wishList: IBook[];
    setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
  } | null;

  if (!context) {
    throw new Error("Wishlist must be inside BooksProvider");
  }

  const { wishList, setWishList } = context;

  const handleWishlist = () => {
    const alreadyWishlisted = wishList.some(
      (item) => item.bookId === book.bookId
    );

    if (alreadyWishlisted) {
      toast.info(`${book.bookName} is already in your wishlist`);
      return;
    }

    setWishList((prev) => [...prev, book]);

    toast.success(`${book.bookName} added to your wishlist`);
  };

  return (
    <button
      onClick={handleWishlist}
      className="cursor-pointer rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg"
    >
      WishList
    </button>
  );
};

export default WishlistBtn;