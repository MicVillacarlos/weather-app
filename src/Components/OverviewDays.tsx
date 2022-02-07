import {Link} from "react-router-dom";
import { RiMoreFill } from "react-icons/ri";

type OverviewDaysProps = {
    date: any;
    AvgTemp: any;
    page:any;
}

const months = ['','Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nove','Dec']

function monthConvert (num:any) {
   return num.charAt(0) ? num.slice(1,2) : num
}

const OverviewDays = (props: OverviewDaysProps) =>{
    return(
        <div className='OverviewDays' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
            <div>
                <h1>{props.AvgTemp}°F</h1>
                <h4>{months[monthConvert(props.date.substring(0,2))]}
                {props.date.substring(3,5)}</h4>
                
                <Link to={props.page}><RiMoreFill/></Link>
            </div>
        </div>
    );
}

export default OverviewDays