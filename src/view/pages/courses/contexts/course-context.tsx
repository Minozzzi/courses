import { Course } from "@/app/entities/course";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

type CourseContextValue = {
  isNewCourseModalOpen: boolean;
  isEditCourseModalOpen: boolean;
  courseBeingEdited: null | Course;
  openNewCourseModal: () => void;
  closeNewCourseModal: () => void;
  openEditCourseModal: (course: Course) => void;
  closeEditCourseModal: () => void;
};

export const CourseContext = createContext({} as CourseContextValue);

export const CourseProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isNewCourseModalOpen, setIsNewCourseModalOpen] = useState(false);
  const [isEditCourseModalOpen, setIsEditCourseModalOpen] = useState(false);
  const [courseBeingEdited, setCourseBeingEdited] = useState<null | Course>(
    null
  );

  const openNewCourseModal = useCallback(() => {
    setIsNewCourseModalOpen(true);
  }, []);

  const closeNewCourseModal = useCallback(() => {
    setIsNewCourseModalOpen(false);
  }, []);

  const openEditCourseModal = useCallback((course: Course) => {
    setCourseBeingEdited(course);
    setIsEditCourseModalOpen(true);
  }, []);

  const closeEditCourseModal = useCallback(() => {
    setCourseBeingEdited(null);
    setIsEditCourseModalOpen(false);
  }, []);

  return (
    <CourseContext.Provider
      value={{
        isNewCourseModalOpen,
        isEditCourseModalOpen,
        courseBeingEdited,
        openNewCourseModal,
        closeNewCourseModal,
        openEditCourseModal,
        closeEditCourseModal,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useCourse() {
  return useContext(CourseContext);
}
