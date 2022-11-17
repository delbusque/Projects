import React from 'react';
import { UserAuth } from '../../contexts/AuthContext.js';

const Account = () => {
    const { user } = UserAuth();
    return (
        <>
            <div
                className="bgded overlay padtop"
                style={{ backgroundImage: 'url("../images/demo/backgrounds/login.jpg")' }}>

                <div id="breadcrumb" className="hoc clear">
                    <h6 className="heading">WELCOME to our fruit FARM</h6>
                </div>
            </div>
            <div className="wrapper row3 account">
                <main className="hoc container clear">
                    <div className="content">
                        <div id="comments">
                            <div className="one_third first">
                                <h2><strong>Account details</strong></h2>
                            </div>

                            <div className="one_third first">
                                <h3>
                                    email: {user.email}
                                </h3>
                            </div>
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

export default Account;