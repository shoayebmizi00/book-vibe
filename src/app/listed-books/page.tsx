'use client';

import { BooksContext } from '@/src/context/BooksContex';
import { IBook } from '@/src/type/bookDataType';
import React, { useContext } from 'react';

interface readBooksProps {
    readBooks : IBook[];
    wishList : IBook[];
}

const Page = () => {
    const { readBooks, wishList } = useContext(BooksContext) as Partial<readBooksProps>;
    return (
        <div>
           Total Read Books: {readBooks?.length ?? 0} <br/>
           Total WishList Books: {wishList?.length}
        </div>
    );
};

export default Page;