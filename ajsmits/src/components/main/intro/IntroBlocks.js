import { Link } from 'react-router-dom';

const IntroBlocks = () => {
    return <div className="wrapper row3">
        <main className="hoc container clear">
            {/* main body */}
            {/* ################################################################################################ */}
            <section id="introblocks">
                <ul className="nospace group grid-3">
                    <li className="one_third">
                        <figure>
                            <Link className="imgover" to="/fruit/apples">
                                <img src="images/demo/apples.jpg" alt="" />
                            </Link>
                            <figcaption>
                                <Link to="/fruit/apples">OUR APPLES</Link>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="one_third">
                        <figure>
                            <Link className="imgover" to="/fruit/pears">
                                <img src="images/demo/pears.jpg" alt="" />
                            </Link>
                            <figcaption>
                                <Link to="/fruit/pears">OUR PEARS</Link>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="one_third">
                        <figure>
                            <a className="imgover" href="#">
                                <img src="images/demo/workwithus.jpg" alt="" />
                            </a>
                            <figcaption>
                                <a href="#">WORK WITH US</a>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
            {/* ################################################################################################ */}
            {/* / main body */}
            <div className="clear" />
        </main>
    </div>
}

export default IntroBlocks;