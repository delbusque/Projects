import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="wrapper row0">
            <div id="topbar" className="hoc clear">
                {/* ################################################################################################ */}
                <div className="fl_left">
                    <ul className="nospace">
                        <li>
                            <Link to="/">
                                {/*<img src="/images/logo-miniAA.png" alt="" />*/}
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="fl_right">
                    <ul className="nospace">
                        <li>
                            <Link to="/">
                                <i className="fas fa-home" />
                            </Link>
                        </li>

                        <li>
                            <Link to="/register" title="Sign Up">
                                <i className="fas fa-edit" />
                            </Link>
                        </li>

                        <li>
                            <Link to="/login" title="Login">
                                <i className="fas fa-sign-in-alt" />
                            </Link>
                        </li>

                        <li id="searchform">
                            <div>
                                <form action="#" method="post">
                                    <fieldset>
                                        <legend>Quick Search:</legend>
                                        <input type="text" placeholder="Enter search term…" />
                                        <button type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </fieldset>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* ################################################################################################ */}
            </div>
        </div>

    )
}

export default Header;