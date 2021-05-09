import React, {useState} from 'react'

//import
import styled from "styled-components";
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';
//redux and routes
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';
import {fadeIn} from '../animation';


const Nav = () => {

        const dispatch=useDispatch();
        const [textInput, setTextInput] = useState('');
        const inputHandler=(e)=>{
            setTextInput(e.target.value);
        }
        const submitSearch=(e)=>{
            e.preventDefault();
            dispatch(fetchSearch(textInput));
            setTextInput('')

        }

        const clearSearched=()=>{
            dispatch({type:"CLEAR_SEARCHED"});
        }
        

    return (
        <StyledNav variants={fadeIn} initial='hidden' animate="show">
            <Logo onClick={clearSearched}>
            <img src={logo} alt ="logo-img"></img>
            <h1>Trigger</h1>
            </Logo>
            <form className="search">
            <input  value={textInput} onChange={inputHandler} type="text"></input>
            <button type='submit' onClick={submitSearch}>Search</button>
            </form>
            
            
        </StyledNav>
    )
}
const StyledNav=styled(motion.div)`
padding: 2rem 5rem;
text-align:center;
cursor: pointer;
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

@media (max-width: 900px){
    padding-top:0;
input {
    width:50%;
    font-size:0.8rem;
  
}
button{
    font-size:0.8rem;  
}
}
`

const Logo=styled(motion.div)`
display:flex;
justify-content:center;
padding: 1rem;
cursor:pointer;
`


export default Nav

