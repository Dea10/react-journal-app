import React from 'react';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
    return (
        <div>
            <h3 className='auth__title'>Register</h3>

            <form >
            <input
                    type='text'
                    placeholder='name'
                    name='name'
                    className='auth__input'
                    autoComplete='off'
                />
                <input
                    type='email'
                    placeholder='email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                />
                <input
                    type='password'
                    placeholder='password'
                    name='password'
                    className='auth__input'
                />
                <input
                    type='password'
                    placeholder='confirm password'
                    name='password2'
                    className='auth__input'
                />
                <button 
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                    disabled
                >
                    Register
                </button>

                <Link className='link' to='/auth/login'>
                    Already registered?
                </Link>
            </form>
        </div>
    );
}

export default RegisterScreen;