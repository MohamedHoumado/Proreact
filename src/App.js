import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from './pages/Accueil';
import Apropos from "./pages/Apropos";
import Galerie from './pages/Galerie';
// import Erreur from "./pages/Erreur";
import Services from "./pages/Services";
import Formation from "./pages/Formation";
import Contact from "./pages/Contact";


function App() {
  return (
   
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/Apropos' element={<Apropos/>}/>
      <Route path='/Galerie' element={<Galerie/>}/>
      {/* <Route path='*' element={<Erreur/>}/> */}
      <Route path='/Services' element={<Services/>}/>
      <Route path='/formation' element={<Formation/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes> 
    </BrowserRouter>
   
  ); 
}

export default App;