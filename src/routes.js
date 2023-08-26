import AboutPage from "./Pages/AboutPage";
import BlogsPage from "./Pages/BlogsPage";
import CertificationPage from "./Pages/CertificationPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import PortfoliosPage from "./Pages/PortfolioPage";
import ResumePage from "./Pages/ResumePage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/resume",
    component: ResumePage,
  },
  {
    path: "/portfolios",
    component: PortfoliosPage,
  },
  {
    path: "/blogs",
    component: BlogsPage,
  },
  {
    path: "/certification",
    component: CertificationPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
];

export default routes;