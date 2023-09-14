import styled from 'styled-components'
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Section = styled.section`
  scroll-snap-align: center; /* posicion del scroll en cada slide  en este caso el centro */
    margin-top: 50px;
  @media only screen and (max-width:760px){ 
    margin-top:20px;
  }
`

const Pie = styled.div`
   bottom:0;
   width:100%;
   height:200px;   /* Height of the footer */
   background: #111;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap:100px;
  @media only screen and (max-width:760px){
    width:100%;
    gap:0px;
    flex-direction: column;
  }
`
const Texto=styled.div`
    width:70%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:760px){
    width:100%;
  }
`

const Descripcion=styled.p`
font-family: monospace;
font-size: 40px;
color: white;
margin-left: 100px;
@media only screen and (max-width:760px){
  font-size: 15px;
  margin-left: 0px;
  }
`

const Icons= styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    gap:30px;
    width:30%;
    @media only screen and (max-width:760px){
    justify-content:center;
    align-items:center;
    margin-top:25px;
    gap:25px;
    width:10%;
  }

`
const Icon= styled.a`
background-color: white;
@media only screen and (max-width:760px){
  }

`


const Footerbottom=styled.div`
height:30px;   /* Height of the footer */
background: #000;
`

function Footer() {
  return (
    <Section id="footer">
        <Pie>
            <Texto>
                <Descripcion>
                Web app realizada por Alfredo Alvarado
                </Descripcion>
                <Descripcion>
                <span style={{ fontWeight: 'bold' }}>Tecnologias</span>: Python, React, Supabase
                </Descripcion>
            </Texto>

            <Icons>
            <Icon href="https://www.linkedin.com/in/alfredo-alvarado-espinoza-31058422a/" target="_blank"><AiFillLinkedin size={70}/></Icon>
            <Icon href="https://github.com/Aljes2310?tab=repositories" target="_blank"><BsGithub  size={70}/> </Icon>
            <Icon href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aljes2310@gmail.com" target="_blank"><AiOutlineMail  size={70}/></Icon>
            </Icons>
        </Pie>
        <Footerbottom></Footerbottom>
    </Section>
  )
}

export default Footer