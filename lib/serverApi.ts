import { ToolPopular } from "@/types/tool";
import { api } from "./api";
import { Category } from "@/types/category";

type PopToolsRequest = {
  perPage: number;
};

type PopToolsResponse = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  tools: ToolPopular[];
};

export const getPopularTools = async ({ perPage }: PopToolsRequest) => {
  try {
    const res = await api.get<PopToolsResponse>("/tools", {
      params: { perPage },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

type FeedbacksRequest = {
  perPage: number;
};

export const getFeedbacks = async ({ perPage }: FeedbacksRequest) => {
  try {
    const res = await api.get("/feedbacks", {
      params: { perPage },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

type CategoriesResponse = Category[];

export const getCategories = async () => {
  try {
    const res = await api.get<CategoriesResponse>("/categories");
    return {
      categories: res.data,
    };
  } catch (error) {
    console.log(error);
  }
};
