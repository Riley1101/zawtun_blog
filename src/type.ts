interface Author {
  name: string;
}
interface Slug {
  type: string;
  current: string;
}
export interface Category {
  title: string;
  _id: string;
}

export interface ArticleProps {
  _id: string;
  _type: string;
  author: Author;
  slug: Slug;
  title: string;
  body: string;
  description: string;
  categories: Category[];
}
