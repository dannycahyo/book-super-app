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

export type BestSellerBook = {
  rank: number
  rank_last_week: number
  weeks_on_list: number
  asterisk: number
  dagger: number
  primary_isbn10: string
  primary_isbn13: string
  publisher: string
  description: string
  price: number
  title: string
  author: string
  contributor: string
  contributor_note: string
  book_image: string
  amazon_product_url: string
  age_group: string
  book_review_link: string
  first_chapter_link: string
  sunday_review_link: string
  article_chapter_link: string
  isbns: []
}