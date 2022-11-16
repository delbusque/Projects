
import React from 'react';
const Login = () => {
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

                            <form>
                                <div className="one_third first">
                                    <label htmlFor="email">
                                        Email <span>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        defaultValue=""
                                        size={22}
                                        required=""
                                    />
                                </div>

                                <div className="one_third first">
                                    <label htmlFor="password">
                                        Password <span>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        defaultValue=""
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