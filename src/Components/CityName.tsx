import { VscLocation } from "react-icons/vsc";

type CityNameProps = {
    city:string;
}
const CityName = (props:CityNameProps) => {
  return <div data-aos="fade-down"data-aos-easing="linear" data-aos-duration="800">
      <h1><VscLocation/> {props.city}</h1>
  </div>;
};

export default CityName;
