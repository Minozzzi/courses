import { useCourses } from "@/app/hooks/use-courses";

export function useListCoursesController() {
  const { courses, isLoading } = useCourses()

  return {
    courses, isLoading
  }
}
