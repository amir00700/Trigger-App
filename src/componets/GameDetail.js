import React from 'react';
//styling and component
import styled from 'styled-components';
import {motion} from 'framer-motion';
//redux
import {useSelector} from 'react-redux';
import {useHistory } from 'react-router-dom';

import {smallImage} from '../util';
//images
import playstation from  '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from  '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

//star images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";




const GameDetail = ({pathId}) => {
    const history=useHistory();
    
    //exit detail
    const exitDetailhandler=(e)=>{
        const element=e.target;
     
       if(element.classList.contains('shadow')){
           document.body.style.overflow='auto';
           history.push('/')
       }
    }

    //get stars function

    const getStars =()=>{
        const stars=[];
        const rating=Math.floor(game.rating);
        for (let i=1;  i<=5; i++){
            if(i<=rating){
                stars.push(<img alt="start" key={i} src={starFull}></img>)
            }
            else{ 
                stars.push(<img alt="star" key={i} src={starEmpty}></img>)
            }
        }
        return stars;
    }

    //get platform image

    const getPlatform=(platform)=>{
        switch(platform){
            case "playStation 4":
                return playstation;
            case "Xbox One":
            return xbox
            case "PC":
            return steam
            case "Nintendo Switch":
            return nintendo;
            case "iOS":
                return apple
                default :
                return gamepad;
        }

    }

    //data
      //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailhandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
               
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow =styled(motion.div)`
width:100%;
min-height:100vh;
overflow-y:scroll;
background:rgba(0,0,0,0.5);
position:fixed;
top:0;
left:0;
&::-webkit-scrollbar{
    width:0.5rem;
}
&::-webkit-scrollbar-thumb{
    background-color:#ff7676;
}
&::-webkit-scrollbar-track{
    background:white;
}
@media (max-width: 900px){
}
`

const Detail=styled(motion.div)`
width:80%;
border-radius:1rem;
padding:2rem 5rem;
background:white;
position:absolute;
left:10%;
color:black;
z-index:10;
img{
    width:100%;
}
@media (max-width: 900px){ 
padding:1rem 1rem;
}
`
const Stats=styled(motion.div)`
display:flex;
justify-content:space-between;
align-items:center;
img{
    width:2rem;
    height:2rem;
    display:inline;
}
@media (max-width: 900px){
  display: inline;
  img{
    width:8%;
    
  }

}
`
const Info=styled(motion.div)`
text-align:center;
@media (max-width: 900px){
  text-align:left;
  }
`
const Platforms=styled(motion.div)`
display:flex;
justify-content:space-evenly;
img{
    margin-left:3rem;
}
@media (max-width: 900px){
  
  img{
    width:20px;
    margin-left:1rem;
  }
  }
`
const Media=styled(motion.div)`
margin-top:5rem;
img{
    height:60vh;
    width:100%;
    object-fit:cover;
}
@media (max-width: 900px){
  
 p{
   padding-top:0rem;
 }
  
  }
`
const Description=styled(motion.div)`
margin: 5rem 0rem;
`
export default GameDetail;
