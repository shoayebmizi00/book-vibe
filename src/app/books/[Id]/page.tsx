import { IBook } from "@/src/type/bookDataType";
import BookDetailsCard from "@/src/components/BookDetailsCard";

const getBooks = async (): Promise<IBook[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    return res.json();
};

const BooksDetailsPage = async ({
    params,
}: {
    params: Promise<{ Id: string }>;
}) => {
    const { Id } = await params;

    const bookData = await getBooks();

    const book = bookData.find((book: IBook) => book.bookId === Number(Id));

    if (!book) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Book Not Found</h2>

                    <p className="mt-2 text-gray-500">Book ID: {Id}</p>
                </div>
            </div>
        );
    }

    return <BookDetailsCard book={book} />;
};

export default BooksDetailsPage;
