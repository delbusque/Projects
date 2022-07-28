import { Link } from 'react-router-dom';

const WhiteHeader = () => {
    return (

        <div className="wrapper row1">
            <section id="ctdetails" className="hoc clear">
                {/* ################################################################################################ */}
                <ul className="nospace clear">
                    <li className="one_quarter first">
                        <div className="block clear">
                            <Link to="/"><img src="images/logo-3.png" alt="#" /></Link>
                        </div>
                    </li>
                    <li className="one_quarter">
                        <div className="block clear">
                            <a href="#">
                                <i className="fas fa-phone" />
                            </a>{" "}
                            <span>
                                <strong>Give us a call:</strong> +00 (123) 456 7890
                            </span>
                        </div>
                    </li>
                    <li className="one_quarter">
                        <div className="block clear">
                            <a href="#">
                                <i className="fas fa-envelope" />
                            </a>{" "}
                            <span>
                                <strong>Send us a mail:</strong> support@domain.com
                            </span>
                        </div>
                    </li>

                    <li className="one_quarter">
                        <div className="block clear">
                            <a href="#">
                                <i className="fas fa-map-marker-alt" />
                            </a>{" "}
                            <span>
                                <strong>Come visit us:</strong> Directions to{" "}
                                <a href="#">our location</a>
                            </span>
                        </div>
                    </li>
                </ul>
                {/* ################################################################################################ */}
            </section>
        </div>
    )
}

export default WhiteHeader;