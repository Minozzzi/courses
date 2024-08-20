import { useQuery } from '@tanstack/react-query'
import { coursesService } from '../services/courses-service'

export function useCourses() {
  const { data, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: coursesService.getAll,
    staleTime: Infinity,
  })

  return { courses: data ?? [], isLoading }
}
