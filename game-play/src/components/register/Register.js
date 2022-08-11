import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext.js";
import * as authService from '../../services/authService.js';

const Register = () => {

    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPassword = formData.get('confirm-password');

        if (password !== repeatPassword) {
            return;
        }

        authService.register(email, password).then(userData => {
            userLogin(userData);

            if (userData.accessToken) {
                navigate('/');
            } else {
                console.log(userData);
                return;
            }
        }).catch((err) => console.log(err))
    }

    return (

        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <a href="/login">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Register;