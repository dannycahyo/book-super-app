export type Book = {
    _id: string;
    title: string;
    author: string;
    category: string;
    price: string;
    image: string;
    reason: string;
    isBuyed: boolean;
  };

export type NewBook = Omit<Book, "_id">;