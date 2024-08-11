import React, { useState } from 'react'
import styles from './Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if(email === 'user@example.com' && password === 'password123') {
            alert('Login successfull');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <>
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input 
                    type='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required />
                </div>
                <div className={styles.formGroup}>
                    <label>Password:</label>
                    <input 
                    type='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button className={styles.submit} type='submit'>Login</button>
            </form>
        </div>
        </>
    );

};

export default Login