import React from 'react';
//styling and component
import styled from 'styled-components';
import {motion} from 'framer-motion';

//
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';
import {smallImage} from '../util';
import {popup} from '../animation';

const Game = ({ name, released, image, id }) => {
   
    //Load Detail Handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
      document.body.style.overflow = "hidden";
      dispatch(loadDetail(id));
    };
  
    return (
      <StyledGame
        variants={popup}
        initial="hidden"
        animate="show"
        onClick={loadDetailHandler}
      >
        <Link to={`/game/${id}`}>
          <h3 >{name}</h3>
          <p>{released}</p>
          <img
            src={smallImage(image, 640)}
            alt={name}
          />
        </Link>
      </StyledGame>
    );
  };

const StyledGame=styled(motion.div)`
min-height:30vh;
box-shadow:0px 5px 20px rgba(0,0,0,0.2);
text-align:center;
border-radius:1rem;
cursor: pointer;
overflow:hidden;
img{
    width:100%;
    height:40vh;
    object-fit:cover;
    padding-left:0;
}
@media (max-width: 900px){
h3{
  font-size:1rem;
  padding-top:0;
  padding-bottom:0;
}
p{
  font-size:.5rem;
}
  img{
    width:100%;
    height:40vh;
    object-fit:cover;
    padding-left:0;
   
}

   
}

`

export default Game
 