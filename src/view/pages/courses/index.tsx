import { Button } from "@/view/components/ui";
import { ListCourses } from "./components/list-courses";
import { CourseContext, CourseProvider } from "./contexts/course-context";
import { NewCourseModal } from "./modals/new-course-modal";

export const CoursesPage: React.FC = () => {
  return (
    <CourseProvider>
      <CourseContext.Consumer>
        {({ openNewCourseModal }) => (
          <div className="flex flex-col gap-8 ">
            <header className="flex justify-between items-center">
              <h1 className="font-semibold text-4xl">Cursos</h1>

              <Button type="button" onClick={openNewCourseModal}>
                Novo curso
              </Button>
            </header>

            <main>
              <ListCourses />
            </main>

            <NewCourseModal />
          </div>
        )}
      </CourseContext.Consumer>
    </CourseProvider>
  );
};
