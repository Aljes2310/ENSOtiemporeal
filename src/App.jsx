
import Areaunodos from "./components/Areaunodos"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Areatrescuatro from "./components/Areatrescuatro";

//npm create vite@latest <nombre-de-mi-proyecto>


function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Areaunodos/>}></Route>
        <Route path="/areatrescuatro" element={<Areatrescuatro/>}></Route>
      </Routes>
     <Footer></Footer>
 </BrowserRouter>
  )
}

export default App
