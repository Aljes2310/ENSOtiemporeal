import styled from 'styled-components'
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect  } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './stylepicker.css';

//area niño 1+2 page
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
//import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const options = {
  responsive: true,
   maintainAspectRatio: false, // Establece esto en false para poder controlar el tamaño manualmente
    width: 500, // Ancho en píxeles
    height: 500, // Alto en píxeles
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Variacion Diaria Area Niño 1+2',
      font: {
        size: 30,
        style: 'italic',
        family: 'Helvetica Neue'
      }
    },
  },
}; 

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
  }

`

const Body=styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 40px;
@media only screen and (max-width:760px){
  flex-direction: column;
  text-align:center;
  }

`


const Columnamapa=styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
`
const Mapa=styled.img`
height: 500px;
width: 800px;
@media only screen and (max-width:760px){
  height: 500px;
  width: 450px;
  }

`

const Promedio =styled.p`
font-size: 30px;
margin-top: 30px;
font-family: monospace;
@media only screen and (max-width:760px){
  font-size:22px
  }
`
const Columnalinea=styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-bottom: 30px;
@media only screen and (max-width:760px){
  justify-content: center;
  margin-top:20px;
  }
`

const Rangofecha = styled.div`
display:flex;
flex-direction:row;
gap:50px;
@media only screen and (max-width:760px){
  gap:20px
}
`

const CuadroLinea=styled.div`
display:flex;
height: 450px;
 width:650px;
 margin-top: 50px;
 @media only screen and (max-width:760px){
  height: 450px;
  width: 350px;
  
}
 `


function Areaunodos() {
  let tzoffset = (new Date()).getTimezoneOffset() * 60000
  const today= new Date()
  const enddatedefault= today.setDate(today.getDate()+5)
  const startdatedefault= today.setDate(today.getDate()-15)
  //fecha hook
  const [mapaDate, SetmapaDate] = useState(new Date());
  const [datos_mapa, setdatos_mapa]=useState([]);
  
  const [datos_linea, setdatos_linea] = useState([]);
  const [startDate, setStartDate] = useState(startdatedefault);
  const [endDate, setenDate] = useState(enddatedefault);



  //useEffect(() => {
    //const fetchmapa= async () => {

    //let tzoffset = (new Date()).getTimezoneOffset() * 60000
    //const formattedDate = (new Date(mapaDate-tzoffset)).toISOString().substring(0, 10)  

    //const resp = await supabase.from('area+2').select().eq('time',formattedDate)
    //const dato_exacto=resp["data"][0]
    //setdatos_mapa(dato_exacto)
    /* 
    const index_needed=array_datos.findIndex(({ time }) => time === formattedDate)
    const pedido=array_datos[index_needed]
    */

    //};
    //fetchmapa();
  //}, [mapaDate]); // to avoid infinite loop


    //todos los datos
  useEffect(() => {
    const dataget = async () => {
    const resp = await supabase.from('area+2').select()
    const datos=resp["data"]


    //const data_parseada=datos.forEach((item) => item.date = new Date(item.time))
    const fechaInicio = new Date(startDate - tzoffset) ;
    const fixfechainicio = fechaInicio.setDate(fechaInicio.getDate()-1);
    const fechaFin = endDate- tzoffset;
    //filtro por fechas
    const elementosFiltrados = datos.filter(item => {
    const fechaItem = new Date(item.time);
    return fechaItem >= fixfechainicio && fechaItem <= fechaFin;
      });
    
      //mapa
      const formattedDate = (new Date(mapaDate-tzoffset)).toISOString().substring(0, 10)  

      const dato_exacto=datos.filter(item => {
        return  item.time === formattedDate
      })
     
      const mapa_especficio=dato_exacto[0]
      if (mapa_especficio === undefined){
        return <div> IMAGEN NO DISPONIBLE</div>
      }
      setdatos_mapa(mapa_especficio)
      setdatos_linea(elementosFiltrados)
      /* 
      const index_needed=array_datos.findIndex(({ time }) => time === formattedDate)
      const pedido=array_datos[index_needed]
      */



    };dataget();
  }, [startDate,endDate, mapaDate]); // to avoid infinite loop


 const chartData = {
    labels: datos_linea.map((item) => item.time), // Ejemplo: Fechas en el eje x
    datasets: [
      {
        label: 'TSM(°C)',
        data: datos_linea.map((item) => item.sst), // Ejemplo: Valores en el eje y
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  
  return (
    <Section id="areaunodos">
        <Container>
          <Titulo>Imagenes y Datos Area Niño 1 + 2</Titulo>
          <CuadroTexto> 
            <Texto>Imagenes  y promedios diarios de TSM del area niño 1+2 (80W°-90°W, 10°S-0°).</Texto>
             <Texto>Selecciona las fechas que te gustaria ver. Fuente de datos: Copernicus.</Texto>
          </CuadroTexto>


          <Body>
              <Columnamapa>
                <DatePicker dateFormat="yyyy/MM/dd" className="custom-date-picker"
                  selected={mapaDate} onChange={(date) => SetmapaDate(date)}/>
              <Promedio> <span style={{color:"red"}}>Promedio : </span> 
              {Math.round(datos_mapa.sst*100)/100} °C</Promedio>
                <Mapa src={datos_mapa.url}></Mapa>
              </Columnamapa>

              <Columnalinea>
                  <Rangofecha>
                    <DatePicker dateFormat="yyyy/MM/dd" className="custom-date-picker"
                  selected={startDate} onChange={(date) => setStartDate(date)}/>
                    <DatePicker dateFormat="yyyy/MM/dd" className="custom-date-picker"
                  selected={endDate} onChange={(date) => setenDate(date)}/>
                  </Rangofecha>
              <CuadroLinea>
                  <Line data={chartData}  options={options}/> 
              </CuadroLinea>

              </Columnalinea>
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

export default Areaunodos