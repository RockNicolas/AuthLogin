import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import { loginUser } from '../../services/authServices'
import '../css/Login.css'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswor] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = await loginUser(email, password);
            localStorage.setItem('token', token);
            navigate('/dashboard');
        } catch (err: any){
            setError(err.message);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <title>Login</title>
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
            <div>
                <span>Ainda não tem uma conta? </span>
                <a href="/register">Cadastre-se</a>
            </div>
        </form>
    )
}