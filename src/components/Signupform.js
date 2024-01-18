import React from 'react';
import {useForm} from 'react-hook-form';
const Signupform = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form className="form" onSubmit = {handleSubmit(onSubmit)}>
        <div className='form-des'>
            <h1>SIGN UP</h1>
        <input type="text" id='firstName' placeholder='First Name' {...register('firstName')}/>
        <input type="text" id='lastName' placeholder='Last Name' {...register('lastName')}/>
        <input type="email" id='email'  placeholder='Email' {...register('email')}/>
        <input type="password" id='password'  placeholder='Password' {...register('password')}/>
        <p>Already have an account? <a href="/signin">Log In</a></p>
        <button>Sign up</button>
        </div>
        
      </form>
    </div>
  );
}

export default Signupform;
