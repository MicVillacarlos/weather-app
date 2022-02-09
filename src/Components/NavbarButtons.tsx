
const NavbarButtons = ({onClick}:any) => {
  return <div className='NavbarButtons' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
    <p>Check City:</p>
      <button value='Cebu' onClick={onClick}>Cebu</button>
      <button value='Manila' onClick={onClick}>Manila</button>
      <button value='New York' onClick={onClick}>New York</button>
      <button value='Tokyo' onClick={onClick}>Tokyo</button>
  </div>;
};

export default NavbarButtons;
