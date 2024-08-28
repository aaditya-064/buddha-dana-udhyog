import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={HomePage} />
          <Route path={"/about"} Component={AboutPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
