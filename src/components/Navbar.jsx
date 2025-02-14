import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=>state.cart);//whenever anything changees in cart items get updated
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      
      <div>
        {/* Use absolute paths instead of incorrect relative paths */}
        <div className='navLinks'>
        <Link to="/" className='navLink'>Home</Link>  
        <Link to="/cart" className='navLink'>Cart</Link>  
        <span className='cartCount'>Cart items: {items.length}</span>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
