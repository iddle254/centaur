import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./views/home/home.page";
import AboutPage from "./views/about/about.page";
import BlogPage from "./views/blog/blog.page";
import ProjectsPage from "./views/projects/projects.page";
import ServicesPage from "./views/services/services.page";
import NotFoundComponent from "./views/404-page/404.component";
import DemoFooter from "./components/footer/DemoFooter";
import Teampage from "./views/team/Teampage.pages";
import HeaderLinks from "./components/header/HeaderLinks";
import Header from "./components/header/Header.component";
const dashboardRoutes = [];
function App() {
  return (
    <div className="App">
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Centaur Labs"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        // {...rest}
      />
      <Switch>
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
        <Route
          path="/about"
          exact
          render={(props) => <AboutPage {...props} />}
        />
        <Route
          path="/team/:params"
          exact
          render={(props) => <Teampage {...props} />}
        />
        <Route path="/blog" exact render={(props) => <BlogPage {...props} />} />
        <Route
          path="/projects"
          exact
          render={(props) => <ProjectsPage {...props} />}
        />
        <Route
          path="/services"
          exact
          render={(props) => <ServicesPage {...props} />}
        />
        <Route
          path="/404-page"
          exact
          render={(props) => <NotFoundComponent {...props} />}
        />
      </Switch>
      <DemoFooter />
    </div>
  );
}

export default App;
