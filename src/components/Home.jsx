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
        <Titulo> About this page</Titulo>
        <CuadroTexto>
          <Texto> This web app shows you diary images and averages of oceanographic parameters 
            to monitor El Niño Event.</Texto>
          <Lista>
              You can find the following sections:
              <Listaitem>► Images of sea surface temperature and its average values in Niño Region 1+2 
                (80W°-90°W, 10°S-0°) and Niño Region 3+4 (120W°-170°W, 5°S-5°N°). </Listaitem>
              <Listaitem>► Winds plot along peruvian coast and Equatorial Pacific
                </Listaitem>
              <Listaitem>► Sea level Anomaly images in front of Peru and Equatorial Pacific </Listaitem>
            </Lista>
          <Texto>Data source to create images and calculate means of temperature were from 
            open sources data like Copernicus and NOAA.</Texto>
          <Texto>If you want an oceanographic analysis or web app/dashboard for specific areas you cant contact me
            through the following email:
            aljes2310@gmail.com.
            </Texto>
        </CuadroTexto>
      </Container>
    </Section>
  )
}

export default Home