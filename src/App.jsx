
import styled from "styled-components"
import Home from "./components/Home"

//npm create vite@latest <nombre-de-mi-proyecto>
const Container = styled.div`
  height: 100%; /* no cambiar a 100% que deja de funcionar los efectos que siguen */
  //scroll-snap-type: y mandatory; /* donde se controla el scroll, este es el efecto slide */
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none            /* desaprece el scrollbar */
  }
  @media only screen and (max-width:760px){
}

`

function App() {

  return (
    <Container>
      <Home></Home>
    </Container>

  )
}

export default App
