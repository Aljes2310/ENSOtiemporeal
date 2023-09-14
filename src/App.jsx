
import styled from "styled-components"
import Areaunodos from "./components/Areaunodos"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Areatrescuatro from "./components/Areatrescuatro";

//npm create vite@latest <nombre-de-mi-proyecto>


const Container = styled.div`
  height: 100vh; /* no cambiar a 100% que deja de funcionar los efectos que siguen */
  //scroll-snap-type: y mandatory; /* donde se controla el scroll, este es el efecto slide */
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  overflow-x: scroll;
  &::-webkit-scrollbar{
    display: none            /* desaprece el scrollbar */
  }
  @media only screen and (max-width:760px){
}

`

function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/areaunodos" element={<Areaunodos/>}></Route>
        <Route path="/areatrescuatro" element={<Areatrescuatro/>}></Route>
      </Routes>
     <Footer></Footer>
 </BrowserRouter>
  )
}

export default App
