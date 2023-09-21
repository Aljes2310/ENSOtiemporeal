
import Areaunodos from "./components/Areaunodos"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Areatrescuatro from "./components/Areatrescuatro";
import Home from "./components/Home";
import Vientos from "./components/Vientos";
import Sla from "./components/Sla";

//npm create vite@latest <nombre-de-mi-proyecto>


function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/areaunodos" element={<Areaunodos/>}></Route>
        <Route path="/areatrescuatro" element={<Areatrescuatro/>}></Route>
        <Route path="/vientos" element={<Vientos/>}></Route>
        <Route path="/sla" element={<Sla/>}></Route>
      </Routes>
     <Footer></Footer>
 </BrowserRouter>
  )
}

export default App
