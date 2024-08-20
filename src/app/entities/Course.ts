export interface Course {
  id: number
  title: string
  description: string
  modules: Module[]
}

interface Module {
  id: number,
  title: string
  description: string
  lessons: Lesson[]
}

interface Lesson {
  id: number
  title: string
  description: string
  content :string
}
