import { LoggedInLayout } from "@/view/layouts/logged-in-layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoggedInLayout />}>
          <Route path='/' element={<h1>oi</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
