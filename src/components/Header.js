import React from 'react'

const Header = () => {
  return (
    <div className='allheader'>
      <div className='header'>
         <div className='logo'>
         <li><a href="/">TOURworld</a></li>
         </div>
         <div className='navlist'>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/posts">BLOG</a></li>
                <li><a href="/signup">SIGN UP</a></li>
                <li><a href="/signin">SIGN IN</a></li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Header;
