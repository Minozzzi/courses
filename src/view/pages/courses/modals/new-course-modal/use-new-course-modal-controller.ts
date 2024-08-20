import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCourse } from "../../contexts/course-context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { coursesService } from "@/app/services/courses-service";
import toast from "react-hot-toast";

const lessonSchema = z.object({
  title: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  description: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  content: z.string().min(1, {
    message: "Campo obrigatório",
  }),
});

const moduleSchema = z.object({
  title: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  description: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  lessons: z.array(lessonSchema).nonempty({
    message: "O módulo precisa de lições",
  }),
});

const schema = z.object({
  title: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  description: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  modules: z.array(moduleSchema).nonempty({
    message: "O curso precisa de módulos",
  }),
});

export type FormData = z.infer<typeof schema>;

export function useNewCourseModalController() {
  const { isNewCourseModalOpen, closeNewCourseModal } = useCourse();

  const form = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
      modules: [
        {
          title: "",
          description: "",
          lessons: [
            {
              title: "",
              description: "",
              content: "",
            },
          ],
        },
      ],
    },
    resolver: zodResolver(schema),
  });
  const { handleSubmit: hookFormSubmit, reset } = form;

  const {
    fields: modules,
    append: handleAddModule,
    remove: handleRemoveModule,
  } = useFieldArray({
    control: form.control,
    name: "modules",
  });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: coursesService.create,
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Curso foi cadastrado com sucesso!");
      reset({
        title: "",
        description: "",
        modules: [],
      });
      closeNewCourseModal();
    } catch {
      toast.error("Erro ao cadastrar o curso");
    }
  });

  return {
    form,
    isPending,
    isNewCourseModalOpen,
    modules,
    closeNewCourseModal,
    handleSubmit,
    handleAddModule,
    handleRemoveModule,
  };
}
