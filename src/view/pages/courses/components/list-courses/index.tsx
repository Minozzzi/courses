import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/view/components/ui";
import { useListCoursesController } from "./use-list-courses-controller";

export const ListCourses: React.FC = () => {
  const { courses, isLoading } = useListCoursesController();

  return (
    <div className="flex w-full h-full">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <span>Carregando cursos...</span>
        </div>
      )}

      <div className="grid gap-4 grid-cols-2 w-full">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-semibold">Módulos</h4>
                <Accordion type="multiple">
                  {course.modules.map((module) => (
                    <AccordionItem key={module.id} value={String(module.id)}>
                      <AccordionTrigger className="text-start text-lg">
                        <div className="flex flex-col gap-1">
                          <span>{module.title}</span>
                          <span>{module.description}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple">
                          {module.lessons.map((lesson) => (
                            <AccordionItem
                              key={lesson.id}
                              value={String(lesson.id)}
                            >
                              <AccordionTrigger className="text-start text-sm">
                                <div className="flex flex-col gap-1">
                                  <span>{lesson.title}</span>
                                  <span>{lesson.description}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                {lesson.content}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
