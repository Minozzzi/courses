import { LoggedInLayout } from "@/view/layouts/logged-in-layout";
import { CoursesPage } from "@/view/pages/courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoggedInLayout />}>
          <Route path="/" element={<CoursesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
