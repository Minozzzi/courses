export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
}
