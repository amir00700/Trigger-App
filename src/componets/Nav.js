import React from 'react'

//import
import styled from "styled-components";
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';


const nav = () => {
    return (
        <StyledNav>
            <Logo>
            <img src={logo} alt ="logo-img"></img>
            <h1>Trigger</h1>
            </Logo>
            <div className="search">
            <input type="text"></input>
            <button>Search</button>
            </div>
            
            
        </StyledNav>
    )
}
const StyledNav=styled(motion.div)`
padding: 2rem 5rem;
text-align:center;
input{
    width:30%;
    font-size:1.5rem;
    padding:0.5rem;
    border:none;
    margin-top: 1rem;
    box-shadow:0px 0px 30px rgba(0,0,0,0.2);
    outline:none;
    font-weight:bold;    
}
button{
    font-size:1.5rem;
    border:none;
    padding:0.5rem 2rem;
    cursor:pointer;
    background:#4CAF50;
    color:white;


}

`

const Logo=styled(motion.div)`
display:flex;
justify-content:center;
padding: 1rem;
cursor:pointer-events;



`

export default nav

