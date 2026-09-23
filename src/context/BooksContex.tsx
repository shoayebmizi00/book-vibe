'use client';
import React, { useState, createContext } from 'react';
import { IBook } from '../type/bookDataType';

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {

    const [wishList, setWishList] = useState<IBook[]>([]);
    const [readBooks, setReadBooks] = useState<IBook[]>([]);

    const sharedData = {
        wishList,
        setWishList,
        readBooks, 
        setReadBooks
    }

    return (
        <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;