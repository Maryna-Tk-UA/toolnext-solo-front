export type ToolPopular = {
  _id: string;
  name: string;
  pricePerDay: number;
  rating: number;
  images: string;
  category: string;
};

// export type Tool = {
//   _id: string;
//   owner: string; //!
//   category: string; //!
//   name: string;
//   description: string;
//   pricePerDay: number;
//   rating: string;
//   images: string;
//   imagePublicId: string;
//   specifications: Record<string, string>;
//   rentalTerms: string;
//   feedbacks: []; //!
//   bookedDates: []; //!
//   createdAt: string;
//   updatedAt: string;
// };

export type ToolsData = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  tools: ToolPopular[];
};
