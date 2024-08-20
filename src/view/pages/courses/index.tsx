import { Button } from "@/view/components/ui";
import { ListCourses } from "./components/list-courses";

export const CoursesPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex justify-between items-center">
        <h1 className="font-semibold text-4xl">Cursos</h1>

        <Button>Novo curso</Button>
      </header>

      <main>
        <ListCourses />
      </main>
    </div>
  );
};
