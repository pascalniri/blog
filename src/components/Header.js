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
                <li><a href="default.asp">DESTINATION</a></li>
                <li><a href="default.asp">FOOD</a></li>
                <li><a href="default.asp">WELLBEING</a></li>
                <li><a href="default.asp">SIGN UP</a></li>
                <li><a href="default.asp">SIGN IN</a></li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Header;
