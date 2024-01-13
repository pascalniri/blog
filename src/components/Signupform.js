import React from 'react';

const Signupform = () => {
  return (
    <div>
      <form className="form">
        <div className='form-des'>
            <h1>SIGN UP</h1>
        <input type="text"  placeholder='First Name'/>
        <input type="text"  placeholder='Last Name'/>
        <input type="email"   placeholder='Email'/>
        <input type="password"   placeholder='Password'/>
        <p>Already have an account? <a href="#">Log In</a></p>
        <button>Sign up</button>
        </div>
        
      </form>
    </div>
  );
}

export default Signupform;
