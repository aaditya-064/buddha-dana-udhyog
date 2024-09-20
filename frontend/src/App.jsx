import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={HomePage} />
          <Route path={"/about"} Component={AboutPage} />
          <Route path={"/services"} Component={ServicePage} />
          <Route path={"/blog"} Component={BlogPage} />
          <Route path={"/contact"} Component={ContactPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
