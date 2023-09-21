import styled from 'styled-components'
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect  } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './stylepicker.css';



// Create a single supabase client for interacting with your database
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)


const Section = styled.section`
  min-height: 100vh;
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
align-items: center;
justify-content: center;
@media only screen and (max-width:760px){
  display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
  text-align: center;

}

`

const CuadroTexto=styled.div`
display:flex;
flex-direction:column;
gap:5px;
margin-top: 30px;
`

const Texto=styled.p`
    font-size: 25px;
  color:black;
  font-family: 'monospace';
  text-align:center;
  font-weight: 500;
  @media only screen and (max-width:760px){
  font-size: 20px;
  text-align:center;
  margin:10px;
  }

`

const Body=styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 50px;
@media only screen and (max-width:760px){
  flex-direction: column;
  text-align:center;
  margin-top: 40px;
  }

`


const Filamapa=styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top:50px;
@media only screen and (max-width:760px){
  width: 60%;
  flex-direction: column;
  gap:20px;
  }

`
const Mapa=styled.img`
height: 550px;
width: 700px;
@media only screen and (max-width:760px){
  height: 400px;
  width: 380px;

  }

`

const Mapa_pacifico=styled.img`
height: 500px;
width: 700px;
@media only screen and (max-width:760px){
  height: 280px;
  width: 380px;

  }

`




function SLA() {
  const today= new Date()
  const startdatedefault= today.setDate(today.getDate()-1)
  //fecha hook
  const [mapaDate, SetmapaDate] = useState(startdatedefault);
  const [datos_mapa, setdatos_mapa]=useState([]);


//renderiza la imagen del mapa
  useEffect(() => {
    const fetchmapa= async () => {

    let tzoffset = (new Date()).getTimezoneOffset() * 60000
    const formattedDate = (new Date(mapaDate-tzoffset)).toISOString().substring(0, 10)  

    const resp = await supabase.from('imagenes_sla').select().eq('time',formattedDate)
    console.log(resp)
    const dato_exacto=resp["data"][0]
    
    if (dato_exacto === undefined){
      return <div> IMAGEN NO DISPONIBLE</div>
    }
    
    setdatos_mapa(dato_exacto)
    /* 
    const index_needed=array_datos.findIndex(({ time }) => time === formattedDate)
    const pedido=array_datos[index_needed]
    */

    };
    fetchmapa();
  }, [mapaDate]); // to avoid infinite loop


  
  return (
    <Section id="sla">
        <Container>
          <Titulo>Imagenes Anomalia del Nivel del Mar (SLA)</Titulo>
          <CuadroTexto> 
            <Texto>Imagenes diarias de SLA en el Pacifico Ecuatorial y frente a la Costa Peruana</Texto>
             <Texto>Selecciona las fechas que te gustaria ver. Fuente de datos: NOAA.</Texto>
          </CuadroTexto>

          <Body>
          <DatePicker dateFormat="yyyy/MM/dd" className="custom-date-picker"
                  selected={mapaDate} onChange={(date) => SetmapaDate(date)}/>
              <Filamapa>
                <Mapa src={datos_mapa.url_peru}></Mapa>
                <Mapa_pacifico src={datos_mapa.url_pacific}></Mapa_pacifico>

                </Filamapa>
          </Body>
          {/* 
       <Grafico>
           <div style={{height: "500px", width:"800px"}}>   
           <Line data={chartData}  options={options}/></div>
        </Grafico> */}
        </Container>
    </Section>
  )
}

export default SLA