import { AiFillHome } from "react-icons/ai";
import {Link} from "react-router-dom";

type DayThreeProps = {
  date:string;
  imgKeyDay:number;
  imgKeyNight:number;
  tempHigh: number;
  tempLow: number;
  typeDay: string;
  typeNight:string;
}


const months = ['','Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nove','Dec']

const monthConvert = (num: string):number => {
  const monthIndex = num.charAt(0) === '0' ? num.slice(1,2) : num
  return Number(monthIndex)
}

const DayThree = (props:DayThreeProps) => {
  return (
  <div className='perDayParent'>
    <div className='perDay'>
        <Link to='/'><button><AiFillHome/></button></Link> 
        <h2>
            {months[monthConvert(props.date.substring(0,2))]}{' '}
            {props.date.substring(3,5)}
        </h2>
        <div className="dayAndNight">
            <div>
              <img src={`https://developer.accuweather.com/sites/default/files/${props.imgKeyDay}-s.png`} alt="weather-icon" />
              <h5>Day Time</h5>
              <h6>{props.typeDay}</h6>
            </div>
            <div>
              <img src={`https://developer.accuweather.com/sites/default/files/${props.imgKeyNight}-s.png`} alt="weather-icon" />
              <h5>Night Time</h5>
              <h6>{props.typeNight}</h6>
            </div>
        </div>
        <div>Temp highest at {props.tempHigh}°F</div>
        <div>Temp lowest at {props.tempLow}°F</div>
    </div>
  </div>
)
  };

export default DayThree;
