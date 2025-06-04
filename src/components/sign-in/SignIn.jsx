import React from 'react';
import { useState } from 'react';

const SignIn = ({ handleLogin, goToRegister, incorrectLogin }) => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const handleSubmit = () => {
        handleLogin(inputEmail, inputPassword);
    }

    return (
        <div className='center p-4 flex-col'>
            <div className='center bg-white p-5 mb-3 rounded-sm flex-col w-5/10 max-w-sm shadow-lg'>
                <p className='text-3xl mb-3 w-full font-semibold'>
                    {'Login'}
                </p>
                {incorrectLogin && (
                    <div className='center bg-red-100 p-3 mb-4 w-full rounded-sm'>
                        <p className='text-center w-full text-red-500'>
                            {'Incorrect email or password.'}
                        </p>
                    </div>
                )}
                <p className='text-left w-full'>
                    {'Email'}
                </p>
                <input type='email' className='border rounded-sm mb-4 p-1 pl-1 pr-1 w-full'
                       onChange={(event) => setInputEmail(event.target.value)} />
                <p className='text-left w-full'>
                    {'Password'}
                </p>
                <input type='password' className='border rounded-sm mb-4 mb-1 p-1 pl-1 pr-1 w-full ' 
                       onChange={(event) => setInputPassword(event.target.value)}/>
                <button className='bg-teal-400 text-white rounded-sm w-full p-1 pl-4 pr-4 shadow-sm btn'
                        onClick={handleSubmit}> 
                    {'Login'} 
                </button>
            </div>
            <div className='center w-5/10 max-w-sm'>
                <p className='mr-3'>
                    {"Don't have an account?"}
                </p>
                <button className='text-green-100 underline cursor-pointer hover:opacity-70'
                        onClick={goToRegister}>
                    {'Sign Up Here'}
                </button>
            </div>
        </div>
    )
}

export default SignIn;