const Header = () => {
    return (
        <div className="wrapper row0">
            <div id="topbar" className="hoc clear">
                {/* ################################################################################################ */}
                <div className="fl_left">
                    <ul className="nospace">
                        <li>
                            <i className="fas fa-mobile-alt rgtspace-5" /> +00 (123) 456 7890
                        </li>
                        <li>
                            <i className="far fa-envelope rgtspace-5" /> info@domain.com
                        </li>
                    </ul>
                </div>
                <div className="fl_right">
                    <ul className="nospace">
                        <li>
                            <a href="#">
                                <i className="fas fa-home" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Help Centre">
                                <i className="far fa-life-ring" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Login">
                                <i className="fas fa-sign-in-alt" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Sign Up">
                                <i className="fas fa-edit" />
                            </a>
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