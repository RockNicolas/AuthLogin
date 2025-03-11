import React, { useState } from 'react'
import { loginUser } from '../../services/authServices'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswor] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = await loginUser(email, password);
            localStorage.setItem('token', token);
        } catch (err: any){
            setError(err.message);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPasswor(e.target.value)} 
            />
            {error && <div>{error}</div>}
            <button type="submit">Button</button>
        </form>
    )
}