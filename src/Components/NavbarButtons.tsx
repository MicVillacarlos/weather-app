type NavbarProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
const NavbarButtons = (props: NavbarProps) => {
  return (
  <div className='NavbarButtons' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
    <p>Check City:</p>
    <button value='Cebu' onClick={props.onClick}>Cebu</button>
    <button value='Manila' onClick={props.onClick}>Manila</button>
    <button value='New York' onClick={props.onClick}>New York</button>
    <button value='Tokyo' onClick={props.onClick}>Tokyo</button>
  </div>
  )
};

export default NavbarButtons;
