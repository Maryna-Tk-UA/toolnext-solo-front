export type Category = {
  _id: string;
  title: string;
  description: string;
  keywords: string;
};

export type CategoriesData = {
  categories: Category[];
};
