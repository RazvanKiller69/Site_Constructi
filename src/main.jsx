import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import ProjectDetails from "./pages/Project.jsx";



const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/projects/:title" element={<ProjectDetails />} /> 
      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
