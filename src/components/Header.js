import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='header'>
         <div className='logo'>
            <h2>TOURworld</h2>
         </div>
         <div className='navlist'>
            <ul>
                <li><a href="">DESTINATION</a></li>
                <li><a href="">FOOD</a></li>
                <li><a href="">WELLBEING</a></li>
                <li><a href="/signup">SIGN UP</a></li>
                <li><a href="/signin">SIGN IN</a></li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Header;
