import React,{useEffect} from 'react';
import GameDetail from '../componets/GameDetail';
import {useDispatch,useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
import Game from '../componets/Game';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useLocation } from 'react-router-dom';
import {fadeIn} from '../animation'
const Home = () => {

    const location= useLocation();
    const pathId=location.pathname.split("/")[2];

    //Fetch Games
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    },[dispatch])
    //get that data back
    const {popular, newGames, upcoming,searched}=useSelector(state=>state.games);
    
    return (
        <GameList variants={fadeIn} initilal='hidden' animate='show'>
          {pathId && <GameDetail pathId={pathId}/> }
          {searched.length ? (
          <div className="searched">
          <h2>Searched Games</h2>
          <Games>
          {searched.map(game=>(
                    <Game name={game.name} released={game.released} id={game.id}
                    image={game.background_image}
                    key={game.id}
                    />
                ))}
                </Games>
                </div>
          )
               :'' }
           <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game=>(
                    <Game name={game.name} released={game.released} id={game.id}
                    image={game.background_image}
                    key={game.id}
                    />
                ))}
                </Games>
                <h2>Popular Games</h2>
            <Games>
                {popular.map(game=>(
                    <Game name={game.name} released={game.released} id={game.id}
                    image={game.background_image}
                    key={game.id}
                    />
                ))}
                </Games>
                <h2>New Games</h2>
            <Games>
                {newGames.map(game=>(
                    <Game name={game.name} released={game.released} id={game.id}
                    image={game.background_image}
                    key={game.id}
                    />
                ))}
                </Games>
             </GameList>         
    )
}

const GameList =styled(motion.div)`
margin-top:0;
padding:0rem 5rem;
h2{
    padding:5rem 0rem;
}
@media (max-width: 900px){
  padding:0rem 3rem;
    h2{
        padding:1rem 1rem;
    }
    
}
`

const Games =styled(motion.div)`
min-height:80vh;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(500px,1fr));
grid-column-gap:3rem;
grid-row-gap:5rem;
@media (max-width: 800px){
    padding-top:0;
    min-height:50vh;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,2fr));
    grid-row-gap:1rem;
}   
`

export default Home


