import React from 'react'

const Signin = () => {
    return (
        <div>
            <form className="form">
                <div className='form-des'>
                    <h1>SIGN IN</h1>
                    <input type="email" placeholder='Email or Phone' />
                    <input type="password"  placeholder='Password' />

                    <p>Not a member? <a href="#">Sign up now</a></p>
                    <button>Sign In</button>
                </div>

            </form>
        </div>
    )
}

export default Signin;