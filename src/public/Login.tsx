import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Redirect } from 'react-router';
import { LoginUser } from './models/LoginUser';
import './Public.css';
import client from './services/ApiService';

const Login = () => {
    const [data, setData] = useState(new LoginUser('',''));
    const [redirect, setRedirect] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const submitData = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await client.post('/login', data);
        localStorage.setItem('token', response.data.token);
        console.log(response)
        setRedirect(true)
    }

    return (
        <div className="form-signin">
            {
                redirect && <Redirect to={'users'} />
            }
            <form onSubmit={submitData}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" onChange={handleChange} required autoFocus />
                <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" onChange={handleChange} required />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
        </div>
    );
}

export default Login;