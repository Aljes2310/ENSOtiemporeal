import styled from 'styled-components'


const Section = styled.section`
  //min-height: 100vh;
  scroll-snap-align: center; /*  */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
@media only screen and (max-width:760px){
  height: 100vh;
}
`


const Container=styled.div`
display:flex;
flex-direction: column;
align-items: right;
justify-content: right;
margin-left: 40px;
@media only screen and (max-width:760px){
  margin-left: 30px;
}
`

const Titulo = styled.h1`
  font-size: 50px;
  margin-top: 40px;
  color:black;
  font-family: bold;
  font-weight: 700;
  @media only screen and (max-width:760px){
  font-size:40px;
}

`
const CuadroTexto=styled.div`
display:flex;
flex-direction: column;
gap:20px;
margin-top: 30px;
@media only screen and (max-width:760px){
  width: 350px;
  }

`

const Texto=styled.p`
    font-size: 25px;
  color:black;
  font-family: 'monospace';
  text-align:justify;
  font-weight: 500;
  margin-top: 15px;
  margin-right: 40px;
  @media only screen and (max-width:760px){
  font-size: 20px;
  }

`


const Lista=styled.ul`
display:flex;
flex-direction: column;
  font-size: 25px;
  color:black;
  font-family: 'monospace';
  font-weight: 500;
  margin-top: 10px;
  gap:20px;
  list-style-type: none;
  padding-left: 0;
  @media only screen and (max-width:760px){
  font-size: 20px;
  width:300px;
  }

`


const Listaitem=styled.li`


font-size: 25px;
color:black;
font-family: 'monospace';
text-align:justify;
font-weight: 500;
margin-left: 20px;

@media only screen and (max-width:760px){
text-align:justify;
font-size: 20px;
margin-left: 0px;
font-size: 20px;

}

`
const Space=styled.br`
display:none;
@media only screen and (max-width:760px){
display: block;
}

`




function Home() {
  return (
    <Section>
      <Container>
        <Titulo> Acerca de esta pagina</Titulo>
        <CuadroTexto>
          <Texto>Esta aplicacion web te proporciona imagenes diarias y promedios de parametros oceanograficos para hacer seguimiento del Evento Niño.</Texto>
          <Lista>
              Podras encontrar lo siguiente:
              <Listaitem>► Imagenes y promedios de Temperatura del Mar del Area Niño 1+2 (80W°-90°W, 10°S-0°) y Area Niño 3+4 (120W°-170°W, 5°S-5°N°). </Listaitem>
              <Listaitem>► Imagenes de Vientos (direccion y magnitud) frente a la Costa Peruana y el Pacifico Ecuatorial. </Listaitem>
              <Listaitem>► Imagenes de Anomalia del Nivel del Mar frente a la Costa Peruana y el Pacifico Ecuatorial. </Listaitem>
            </Lista>
          <Texto>La fuente de datos para las imagenes y promedios proviene de distintas fuentes abiertas como Copernicus y NOAA.</Texto>
          <Texto>Si deseas un analisis oceanografico o una elaboracion de aplicacion web - dashboard para areas especificas puedes contactarte a los
            siguientes correos:<Space></Space> <Space></Space>licochea@lamolina.edu.pe, <Space></Space><Space></Space>
            aljes2310@gmail.com.
            </Texto>
        </CuadroTexto>
      </Container>
    </Section>
  )
}

export default Home