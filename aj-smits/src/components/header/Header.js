import React from 'react';
import styles from './Header.module.css'

import { Link } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext.js';

const Header = () => {
    const { user } = UserAuth();

    return (
        <div className="wrapper row0">
            <div id="topbar" className="hoc clear">
                <div className="fl_left">
                    <Link to="/">
                        <img src="/images/logo-miniAA.png" alt="" />
                    </Link>
                </div>
                <div className="fl_right">
                    <ul className="nospace">
                        <li className={styles['nav']}>
                            <Link to="/" title='Home'>
                                <i className="fas fa-home" /><span> Home</span>
                            </Link>
                        </li>

                        {!user && <>
                            <li className={styles['nav']}>
                                <Link to="/register" title="Register">
                                    <i className="fas fa-edit" /><span> Register</span>
                                </Link>
                            </li>
                            <li className={styles['nav']}>
                                <Link to="/login" title="Login">
                                    <i className="fas fa-sign-in-alt" /><span> Login</span>
                                </Link>
                            </li>
                        </>}

                        {user && <>  <li className={styles['nav']}>
                            <Link to="/account" title='My Account'>
                                <i className="fas fa-user" /><span> My Account</span>
                            </Link>
                        </li>
                            <li className={styles['nav']}>
                                <Link to="/logout" title="Logout">
                                    <i className="fas fa-sign-out-alt" /><span> Logout</span>
                                </Link>
                            </li>
                        </>}

                        {/* <li id="searchform">
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
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Header;