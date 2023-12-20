import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
        <nav className='Navbar'>
           <div>Home</div>
           <div>About</div>
           <div>Gallery</div>
           <div><input type="search" /></div>
           <div>Contact</div>
           <div>Cart</div>
        </nav>
    </div>
  )
}
export default Navbar
