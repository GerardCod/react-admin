import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CreateUser } from './models/CreateUser';
import './Public.css';
import client from './services/ApiService';

const Register = () => {
    const [userData, setUserData] = useState(new CreateUser('', '', '', '', ''));

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const sendData = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userData.password !== userData.confirm_password) {
            alert('Las contraseñas son distintas');
        } else {
           const response = await client.post('/signup', userData);
           console.log(response.data);
        }
    }

    return (
        <div>
            <main className="form-signin">
                <form onSubmit={sendData}>
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                    <label htmlFor="inputFirstName" className="visually-hidden">Firstname</label>
                    <input type="text" id="inputFirstName" className="form-control" placeholder="Firstname" name="first_name" onChange={handleFormChange} required autoFocus />
                    <label htmlFor="inputLastName" className="visually-hidden">Lastname</label>
                    <input type="text" id="inputLastName" className="form-control" placeholder="Lastname" name="last_name" onChange={handleFormChange} required />
                    <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" onChange={handleFormChange} required />
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" onChange={handleFormChange} required />
                    <label htmlFor="inputPassword" className="visually-hidden">Confirm password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Confirm password" name="confirm_password" onChange={handleFormChange} required />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
        </div>
    );
}

export default Register;