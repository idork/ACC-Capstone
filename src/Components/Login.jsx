import React from 'react'
import { userLogin } from '../API/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState({});

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const result = await userLogin(username, password);
            setResult(result);
            
            const token = Object.values(result)[0];
            localStorage.setItem('auth_token', JSON.stringify(token));
            setToken(token);

            console.log(result);
            console.log("username: " + username)
            console.log("password: " + password);


        } catch (error){
            console.error(error);
            console.log(result);
        }

        }
        const check =  () => {
            {result[0] ? (
                onClick=navigate('/Products')
            ) : (
                console.log("fail")
            )}

    }

    return (<form method="post" onSubmit={handleSubmit}>
        
        <h3 id="component-h3"> Login </h3>
        <label>
            <input className='register-login-input' value={username} onChange={(e) => setUsername(e.target.value)} required
            placeholder=" Username *" />
        </label>
        <label>
            <input className='register-login-input' value={password} type="password" required onChange={(e) => setPassword(e.target.value)}
            placeholder=" Password *" max-length="8" minLength="6"/>
        </label>
        <div>
            <p> 
                Don't have an account? <span onClick={() => navigate('/Register')}> Sign Up.</span>
            </p>
        </div>
        <label>
            <button type="submit" onClick={() =>check}> Login </button>
        </label>
    </form>)
}