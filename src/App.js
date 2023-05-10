import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import NewProject from './pages/NewProject/NewProject';
import NewCompany from './pages/NewCompany/NewCompany';
import Companys from './pages/Companys/Companys';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import ProjectEdit from './pages/ProjectEdit/ProjectEdit';
import CompanyEdit from './pages/CompanyEdit/CompanyEdit';
import { NavBar } from './components/NavBar/Index';
import { Footer } from './components/Footer/Index';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>

        <Route path='/newcompany' element={<NewCompany />}>
        </Route>

        <Route path='/newproject' element={<NewProject />}>
        </Route>

        <Route path='/companys' element={<Companys />}>
        </Route>

        <Route path='/contact' element={<Contact />}>
        </Route>

        <Route path='/projects' element={<Projects />}>
        </Route>

        <Route path='/project/:id' element={<ProjectEdit />}>
        </Route>

        <Route path='/company/:id' element={<CompanyEdit />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
