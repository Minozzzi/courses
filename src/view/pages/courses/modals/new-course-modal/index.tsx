import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/view/components/ui";
import { useNewCourseModalController } from "./use-new-course-modal-controller";
import { Trash2 } from "lucide-react";
import { Lessons } from "./components/lessons";

export const NewCourseModal: React.FC = () => {
  const {
    form,
    isPending,
    isNewCourseModalOpen,
    modules,
    closeNewCourseModal,
    handleSubmit,
    handleAddModule,
    handleRemoveModule,
  } = useNewCourseModalController();

  return (
    <Dialog
      modal
      open={isNewCourseModalOpen}
      onOpenChange={closeNewCourseModal}
    >
      <DialogContent className="w-2/4">
        <DialogHeader className="text-xl font-semibold">
          Novo curso
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Título do curso" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input placeholder="Descrição do curso" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Módulos</h4>
              <div className="flex flex-col gap-3">
                {modules.map(({ id }, index) => (
                  <div key={id} className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <FormField
                        control={form.control}
                        name={`modules.${index}.title`}
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Título</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Título do módulo"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />

                      <FormField
                        key={id}
                        control={form.control}
                        name={`modules.${index}.description`}
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Descrição</FormLabel>
                              <FormControl>
                                <div className="flex gap-3">
                                  <Input
                                    placeholder="Descrição do módulo"
                                    {...field}
                                  />
                                  <Button
                                    type="button"
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => handleRemoveModule(index)}
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

                    <Lessons control={form.control} moduleIndex={index} />
                  </div>
                ))}
              </div>
              <Button
                type="button"
                onClick={() =>
                  handleAddModule({
                    title: "",
                    description: "",
                    lessons: [
                      {
                        title: "",
                        description: "",
                        content: "",
                      },
                    ],
                  })
                }
              >
                Novo módulo
              </Button>
            </div>

            <Button type="submit" disabled={isPending} className="w-full">
              Criar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
