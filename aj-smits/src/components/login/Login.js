import React from 'react';
import { UserAuthContext } from '../../contexts/AuthContext.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const { loginUser } = UserAuthContext();
    const [values, setValues] = useState({ email: '', password: '', error: '' })

    const inputHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }))
    }

    const loginHandler = async (e) => {
        try {
            e.preventDefault();
            await loginUser(values.email, values.password);
            navigate('/account')
        } catch (err) {
            setValues(oldValues => ({
                ...oldValues,
                error: err.message
            }))
        }
    }

    return (
        <>
            <div
                className="bgded overlay padtop"
                style={{ backgroundImage: 'url("../images/demo/backgrounds/login.jpg")' }}>

                <div id="breadcrumb" className="hoc clear">
                    <h6 className="heading">LOGIN to proceed with your work application</h6>
                </div>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <div className="content">
                        <div id="comments">
                            <h2>Login details</h2>

                            <form onSubmit={loginHandler}>
                                <div className="one_third first">
                                    <label htmlFor="email">
                                        Email <span>*</span>
                                    </label>
                                    <input
                                        onChange={inputHandler}
                                        value={values.email}
                                        type="email"
                                        name="email"
                                        id="email"
                                        size={22}
                                        required=""
                                    />
                                </div>

                                <div className="one_third first">
                                    <label htmlFor="password">
                                        Password <span>*</span>
                                    </label>
                                    <input
                                        onChange={inputHandler}
                                        value={values.password}
                                        type="password"
                                        name="password"
                                        id="password"
                                        size={22}
                                        required=""
                                    />
                                </div>

                                <div className="block clear"></div>

                                <div>
                                    <input type="submit" value="Login" />
                                </div>

                                <p className="field">
                                    <span>
                                        If you do not have an account, please <a href="/login">sign up</a>
                                    </span>
                                </p>
                            </form>

                        </div>
                    </div>
                    <div className="clear" />
                </main>
            </div>

            <a id="backtotop" href="#top">
                <i className="fas fa-chevron-up" />
            </a>
        </>

    )
}

export default Login;