import React from "react";
import "./App.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from './pages/Accueil';
import Apropos from "./pages/Apropos";
import Galerie from './pages/Galerie';
import Caroussel from './pages/Caroussel';
import Services from "./pages/Services";
import Formation from "./pages/Formation";
import Calculatrice from "./pages/Calculatrice";
import Inscriptions from "./pages/Inscriptions";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <div>
    
    <BrowserRouter>
     <Routes>
      <Route path='/proreact' element={<Accueil/>}/>
      <Route path='/Apropos' element={<Apropos/>}/>
      <Route path='/Galerie' element={<Galerie/>}/>
      <Route path='/Caroussel' element={<Caroussel/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Formation' element={<Formation/>}/>
      <Route path="/calculatrice" element={<Calculatrice/>}/>
      <Route path='/Inscriptions' element={<Inscriptions/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes> 
    </BrowserRouter>
    
    </div>
  ); 
}


export default App;