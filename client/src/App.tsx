import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { lazy, Suspense } from "react";
import AboutMe from "./pages/AboutMe/AboutMe";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import ContactMe from "./pages/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin/Admin";
import Spinner from "./components/Spinner/Spinner";

const Home = lazy(() => import("./pages/Home/Home"))

const App = () => {
  return (
    <>
      <Nav />

      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact_me" element={<ContactMe />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Suspense>

      <Footer/>
    </>
  );
};

export default App;
