import React from 'react'
import { useState } from 'react'
import { userRegister } from '../API/index'

export default function Register({setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [result, setRegister] = useState('');

    async function handleSubmit(e, data) {
        e.preventDefault();

        try{
            const result = await userRegister(username, password);
            setRegister(result);

            const token = Object.values(result)[0];
            localStorage.setItem('token', JSON.stringify(token));
            setToken(token);

            console.log(result);
            console.log("username: " + username)
            console.log("password: " + password);

        }catch (error){
            console.log(error);
            console.log({username, password});
        }
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    }

    return <form method="post" onSubmit={handleSubmit}>

        <h3 id="component-h3"> Register </h3>
        <label>
            <input className='register-login-input' value={username} onChange={(e) => setUsername(e.target.value)} required 
            placeholder="Username *"/>
        </label>
        <hr />
        <label>
            <input className='register-login-input' value={password} type="password" onChange={(e) => setPassword(e.target.value)}
            required placeholder=" Password *"/>
        </label>
        <hr />
        <label>
            <input className='register-login-input' value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)}
            required placeholder=" Confirm your password *" maxLength="8" minLength="6" />
        </label>
        <label>
            <button type="submit"> Register </button>
        </label>
    </form>
}