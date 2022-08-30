import logo from './logo.svg';
import './App.css';
import { Route, Routes, Redirect } from 'react-router-dom';
import HomePage from './views/home/home.page';
import AboutPage from './views/about/about.page';
import BlogPage from './views/blog/blog.page';
import ProjectsPage from './views/projects/projects.page';
import ServicesPage from './views/services/services.page';
import NotFoundComponent from './views/404-page/404.component';
import DemoFooter from './components/footer/DemoFooter';
import Teampage from './views/team/Teampage.pages';
import HeaderLinks from './components/header/HeaderLinks';
import Header from './components/header/Header.component';
const dashboardRoutes = [];
function App() {
  return (
    <div className='App'>
      <Header
        color='transparent'
        routes={dashboardRoutes}
        brand='Centaur Labs'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        // {...rest}
      />
      <Routes>
        {/* <Route path='/' exact render={(props) => <HomePage {...props} />} /> */}
        <Route path='/centaur' exact element={<HomePage />} />
        <Route path='/centaur/about' exact element={<AboutPage />} />
        <Route path='/centaur/team/:params' exact element={<Teampage />} />
        <Route path='/centaur/blog' exact element={<BlogPage />} />
        <Route path='/centaur/projects' exact element={<ProjectsPage />} />
        <Route path='/centaur/services' exact element={<ServicesPage />} />
        <Route path='/centaur/404-page' exact element={<NotFoundComponent />} />
      </Routes>
      <DemoFooter />
    </div>
  );
}

export default App;
