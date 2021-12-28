import { About } from "about";
import { HomePage } from "homepage/view";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutePath } from "./route";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.Home} element={<HomePage />} />
        <Route path={RoutePath.About} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
