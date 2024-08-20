import { Course } from "@/app/entities/Course";
import { httpClient } from "@/app/services/httpClient";

type CoursesResponse = Array<Course>

export async function getAll() {
  const { data } = await httpClient.get<CoursesResponse>('/courses')

  return data
}
