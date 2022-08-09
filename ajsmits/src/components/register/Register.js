const Register = () => {
    return (
        <>
            <div
                className="bgded overlay padtop"
                style={{ backgroundImage: 'url("../images/demo/backgrounds/register.jpg")' }}
            >
                <div id="breadcrumb" className="hoc clear">
                    <h6 className="heading">To apply for work with us you need to REGISTER</h6>
                </div>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <div className="content">
                        <div id="comments">
                            <h2>Personal details</h2>


                            <form>
                                <div className="one_third first">
                                    <label htmlFor="firstName">
                                        First Name <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        defaultValue=""
                                        size={22}
                                        required=""
                                    />
                                </div>

                                <div className="one_third first">
                                    <label htmlFor="surname">
                                        Surname <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="surname"
                                        id="surname"
                                        defaultValue=""
                                        size={22}
                                        required=""
                                    />
                                </div>


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

                                <div className="one_third first">
                                    <label htmlFor="repeatPassword">
                                        Repeat Password <span>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="repeatPassword"
                                        id="repeatPassword"
                                        defaultValue=""
                                        size={22}
                                        required=""
                                    />
                                </div>



                                <div className="block clear">

                                </div>
                                <p>
                                    Note: if you are not a European citizen or an EEA national, you will not be able to work in the Netherlands without a Dutch work permit. Only register if you have a work permit.
                                </p>
                                <div>
                                    <input type="submit" value="Register" />
                                    &nbsp;
                                    <input type="reset" name="reset" value="Reset Form" />
                                </div>
                                <p className="field">
                                    <span>
                                        If you already registered, please <a href="/login">login</a>
                                    </span>
                                </p>
                            </form>


                        </div>
                    </div>
                    <div className="clear" />
                </main>
            </div>
            {/* ################################################################################################ */}
            {/* ################################################################################################ */}
            {/* ################################################################################################ */}
            {/* Bottom Background Image Wrapper */}

            {/* ################################################################################################ */}
            {/* ################################################################################################ */}
            {/* ################################################################################################ */}
            <a id="backtotop" href="#top">
                <i className="fas fa-chevron-up" />
            </a>
            {/* JAVASCRIPTS */}
        </>

    )
}

export default Register;