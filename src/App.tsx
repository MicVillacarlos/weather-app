import { useEffect, useState,useReducer } from 'react';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Headline from './Components/Headline';
import NavbarButtons from './Components/NavbarButtons';
import OverviewDays from './Components/OverviewDays'
import './App.css'
import DayOne from './Components/DayOne'
import DayTwo from './Components/DayTwo';
import DayThree from './Components/DayThree';
import DayFour from './Components/DayFour';
import DayFive from './Components/DayFive';
import CityName from './Components/CityName';

type state = {
  key: string
  city:string
}
type action = {
  type: string;
}

const reducer =(state:state,action:action)=>{
  switch (action.type){
    case 'Manila':
      return {key:'264885',city:'Manila, Philippines 1000'}
    case 'New York':
      return {key:'349727',city:'New York, USA 10001'}
    case 'Cebu':
      return {key:'3405959',city:'Cebu, Philippines 6000'}
      case 'Tokyo':
        return {key:'226396',city:'Tokyo, Japan 100-0000'}
    default: 
      return state
  }
}

const App = ()=> {
const [weatherData,setWeatherData] = useState<any[]>([])
const [state,dispatch] = useReducer(reducer, {key:'3405959',city:'Cebu, Philippines 6000'})

const pickCity =(e:string)=>{
  if (e==='Manila')
    dispatch ({type:'Manila'})
  if (e==='New York')
    dispatch({type:'New York'})
  if(e==='Cebu')
    dispatch({type:'Cebu'})
  if(e==='Tokyo')
    dispatch({type:'Tokyo'})
}

type df = {
  Date:string;
  Temperature: any;
  Day: any;
  Night: any;
}

useEffect (()=> {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${state.key}?apikey=IsBJKbwVFGZGohB2NooCZTABsJgivF4t`)
    .then(res => res.json())
    .then(res => setWeatherData(res.DailyForecasts.map((df:df) => {
      return{
        date: df.Date.substring(5,10),
        tempHigh: df.Temperature.Maximum.Value,
        tempLow: df.Temperature.Minimum.Value,
        temp: Math.floor(((df.Temperature.Maximum.Value + df.Temperature.Minimum.Value) / 2)),
        typeDay: df.Day.IconPhrase,
        imgKeyDay: df.Day.Icon.toString().padStart(2,"0"),
        imgKeyNight: df.Night.Icon.toString().padStart(2,"0"),
        typeNight: df.Night.IconPhrase,
          }
        })
      ))
    },[state]);


  return (
    <Router>
        <Headline/>
        <NavbarButtons onClick={(e:MouseEvent|string|any)=>pickCity(e.target.value)}/>
        <CityName city={state.city}/>
      <Routes>
          <Route path='/' 
          element = {weatherData.map((i:any,index:number)=>(
              <OverviewDays key={index} date={i.date} AvgTemp={i.temp} page={`/${index}`}/>
            ))}
          />
          {weatherData.length === 5 ?
          <Route path='/0' 
            element={<DayOne 
              date={weatherData[0].date} 
              imgKeyDay={weatherData[0].imgKeyDay} 
              imgKeyNight={weatherData[0].imgKeyNight}
              tempHigh={weatherData[0].tempHigh} 
              tempLow={weatherData[0].tempLow} 
              typeDay={weatherData[0].typeDay} 
              typeNight={weatherData[0].typeNight}
            /> } 
          /> :null}
          {weatherData.length === 5 ?
          <Route path='/1' 
            element={<DayTwo 
              date={weatherData[1].date} 
              imgKeyDay={weatherData[1].imgKeyDay} 
              imgKeyNight={weatherData[1].imgKeyNight}
              tempHigh={weatherData[1].tempHigh} 
              tempLow={weatherData[1].tempLow} 
              typeDay={weatherData[1].typeDay} 
              typeNight={weatherData[1].typeNight}
            /> } 
          /> :null}
          {weatherData.length === 5 ?
          <Route path='/2' 
            element={<DayThree 
              date={weatherData[2].date} 
              imgKeyDay={weatherData[2].imgKeyDay} 
              imgKeyNight={weatherData[2].imgKeyNight}
              tempHigh={weatherData[2].tempHigh} 
              tempLow={weatherData[2].tempLow} 
              typeDay={weatherData[2].typeDay} 
              typeNight={weatherData[2].typeNight}
            /> } 
          /> :null}
          {weatherData.length === 5 ?
          <Route path='/3' 
            element={<DayFour 
              date={weatherData[3].date} 
              imgKeyDay={weatherData[3].imgKeyDay} 
              imgKeyNight={weatherData[3].imgKeyNight}
              tempHigh={weatherData[3].tempHigh} 
              tempLow={weatherData[3].tempLow} 
              typeDay={weatherData[3].typeDay} 
              typeNight={weatherData[3].typeNight}
            /> } 
          /> :null}
          {weatherData.length === 5 ?
          <Route path='/4' 
            element={<DayFive 
              date={weatherData[4].date} 
              imgKeyDay={weatherData[4].imgKeyDay} 
              imgKeyNight={weatherData[4].imgKeyNight}
              tempHigh={weatherData[4].tempHigh} 
              tempLow={weatherData[4].tempLow} 
              typeDay={weatherData[4].typeDay} 
              typeNight={weatherData[4].typeNight}
            /> } 
          /> :null}
      </Routes>
    </Router>
  );
}

export default App;
