import styled from 'styled-components'
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect  } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './stylepicker.css';

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
  height: 100vh;
  scroll-snap-align: center; /*  */
@media only screen and (max-width:760px){
  height: 150vh;
}
`

const Container=styled.div`
height:100%;
width:100%;
display:flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width:760px){
  height: 150vh;
}
`
const Titulo = styled.h1`
  font-size: 60px;
  margin-top: 40px;
  color:black;
  font-family: bold;
  font-weight: 700;

`

const Texto=styled.p`
    font-size: 30px;
  color:black;
  font-family: 'monospace';
  font-weight: 500;
  padding:50px;
  @media only screen and (max-width:760px){
  font-size: 20px;
  text-align:center;
  }

`

const Grafico=styled.div`
display:flex;
flex-direction: row;
align-items: center;
`

const Linea=styled.div`
display:flex;
flex-direction: row;
align-items: center;
gap: 0px 100px;
`


function Home() {

  //fecha hook
  const [startDate, setStartDate] = useState(new Date());
  const [datos_mapa, setdatos_mapa]=useState([]);
  const [datos_linea, setdatos_linea] = useState([]);

  useEffect(() => {
    const fetchget= async () => {

    let tzoffset = (new Date()).getTimezoneOffset() * 60000
    const formattedDate = (new Date(startDate-tzoffset)).toISOString().substring(0, 10)  

    const resp = await supabase.from('niño1+2').select().eq('time',formattedDate)
    const dato_exacto=resp["data"][0]
    setdatos_mapa(dato_exacto)
    /* 
    const index_needed=array_datos.findIndex(({ time }) => time === formattedDate)
    const pedido=array_datos[index_needed]
    */

    };
    fetchget();
  }, [startDate]); // to avoid infinite loop


    //todos los datos
  useEffect(() => {
    const dataget = async () => {
    const resp = await supabase.from('niño1+2').select()
    const datos=resp["data"]
    console.log(datos)
    setdatos_linea(datos)
    };dataget();
  }, []); // to avoid infinite loop


 const chartData = {
    labels: datos_linea.map((item) => item.time), // Ejemplo: Fechas en el eje x
    datasets: [
      {
        label: 'TSM(°c)',
        data: datos_linea.map((item) => item.sst), // Ejemplo: Valores en el eje y
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  
  return (
    <Section id="home">
        <Container>
          <Titulo>Imagenes y Datos Area Niño 1 + 2</Titulo>
          <Texto> En esta pagina puedes ver las imagenes  y datos diarias de TSM del area niño 1+2 (90°-80°W, 10°S-0°).
            Selecciona la fecha de la imagen que te gustaria ver 
          </Texto>

          <Linea>
          <DatePicker dateFormat="yyyy/MM/dd" className="custom-date-picker"
            selected={startDate} onChange={(date) => setStartDate(date)}/>
            <p style={{fontSize:"40px"}}> <span style={{color:"red"}}>Promedio : </span> 
            {Math.round(datos_mapa.sst*100)/100}</p>
          </Linea>
       <Grafico>
            <img src={datos_mapa.url}></img>
           <div style={{height: "500px", width:"800px"}}>   
           <Line data={chartData}  options={options}/></div>
        </Grafico>
        </Container>
    </Section>
  )
}

export default Home