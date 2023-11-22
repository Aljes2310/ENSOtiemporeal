import { useState } from 'react'
import  styles from './Navbar.module.css';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Logosite = styled.div`
    width: 20%;
    display: flex;
    align-items: center; /* vertical */
   justify-content: center;
    background-color: #00cd33;
    @media only screen and (max-width:760px){
    width:50%;
    flex-direction:column;
    align-items: center; /* vertical */
    justify-content: center;}

`
const Logo = styled.img`
  height: 65px;
  width:65px;
  background-color: #00cd67;
  border-radius: 50%;
  @media only screen and (max-width:760px) {
  height:50px;
  width:50px;
  };

`
function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
    <div className="App">
      <header className="App-header">


        <nav className={`${styles.navbar}`}>


          {/* logo */}
          <Logosite>
            <a href='/'><Logo src="/icono.jpg"></Logo></a>
        </Logosite>

          {/* 'https://wa.me/+51929076660'  target=_blank*/}

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to='/areaunodos' className={`${styles.navLink}`}>Niño Region 1+2</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/areatrescuatro' className={`${styles.navLink}`}>Niño Region 3+4</Link>
            </li>
      
            <li onClick={removeActive}>
              <Link to='/vientos' className={`${styles.navLink}`}>Winds</Link>
            </li>
            <li onClick={removeActive}>
              <a href='/sla' className={`${styles.navLink}`}>Salinity</a>
            </li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


      </header>
    </div>
  );
}


export default Navbar;

