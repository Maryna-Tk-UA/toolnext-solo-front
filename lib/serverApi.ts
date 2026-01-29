import { ToolPopular } from "@/types/tool";
import { api } from "./api";

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
