import { httpClient } from "@/app/services/httpClient";

type CreateCourseParams = {
  title: string;
  description: string;
  modules: {
    title: string;
    description: string;
    lessons: {
      title: string;
      description: string;
      content: string;
    }[];
  }[];
};

export async function create(params: CreateCourseParams) {
  const { data } = await httpClient.post("/courses", params);

  return data;
}
