import { About } from "about";
import { Courses } from "courses/view";
import { HomePage } from "homepage/view";
import { News } from "news/view";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutePath } from "./route";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.Home} element={<HomePage />} />
        <Route path={RoutePath.About} element={<About />} />
        <Route path={RoutePath.News} element={<News />} />
        <Route path={RoutePath.Courses} element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
