import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  Button,
} from "@/view/components/ui";
import { Trash2 } from "lucide-react";
import { Control, useFieldArray } from "react-hook-form";
import type { FormData } from "../use-new-course-modal-controller";

type LessonsProps = {
  control: Control<FormData>;
  moduleIndex: number;
};

export const Lessons: React.FC<LessonsProps> = ({ control, moduleIndex }) => {
  const {
    fields: lessons,
    append: handleAddLesson,
    remove: handleRemoveLesson,
  } = useFieldArray({
    control,
    name: `modules.${moduleIndex}.lessons`,
  });

  return (
    <div className="flex flex-col gap-1 pl-4">
      <h4 className="font-semibold text-base">Lições</h4>
      {lessons.map(({ id }, index) => (
        <div key={id} className="flex gap-2">
          <FormField
            control={control}
            name={`modules.${moduleIndex}.lessons.${index}.title`}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Título da lição" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={control}
            name={`modules.${moduleIndex}.lessons.${index}.description`}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input placeholder="Descrição da lição" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            key={id}
            control={control}
            name={`modules.${moduleIndex}.lessons.${index}.content`}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Conteúdo</FormLabel>
                  <FormControl>
                    <div className="flex gap-3">
                      <Input placeholder="Conteúdo da lição" {...field} />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => handleRemoveLesson(index)}
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
      ))}
      <Button
        type="button"
        onClick={() =>
          handleAddLesson({
            title: "",
            description: "",
            content: "",
          })
        }
      >
        Nova lição
      </Button>
    </div>
  );
};
