//Base
const base_url = "https://api.rawg.io/api/"

//Getting the month
const getCurrentMonth=()=>{
    const month=new Date().getMonth()+1;
    if(month<10){
        return `0${month}`;
    }
    else{
        return month;
    }
}
//Getting the date
const getCurrentDay=()=>{
    const day=new Date().getDate();
    if(day<10){
        return `0${day}}`;
    }
    else{
        return day;
    }
}
//currentYear
const currentMonth=getCurrentMonth();
const currentDay=getCurrentDay();
const currentYear=new Date().getFullYear();
const currentDate=`${currentYear}-${currentMonth}-${currentDay}`
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`;
const key=`${process.env.REACT_APP_API_KEY}`;
const key_url=`key=${key}`;




//Popular games
const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games =`games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames=`games?${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export  const popularGamesURl=()=> ` ${base_url}${popular_games}`; 
export const upcomingGamesURL=()=> `${base_url}${upcoming_games}`;
export const newGamesURL=()=>`${base_url}${newGames}`;

//Game details
export const gameDetailsURL =(game_id)=>`${base_url}games/${game_id}?${key_url}`;







