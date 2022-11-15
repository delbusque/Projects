import React from 'react';

const About = () => {
    return (
        <div className="bgded overlay" style={{ backgroundImage: 'url("images/demo/backgrounds/banner-1.jpg")' }}>
            <section className="hoc container clear">
                {/* ################################################################################################ */}
                <figure className="one_half first">
                    <h6 className="heading">Ante fringilla nisl eu</h6>
                    <p className="btmspace-30">
                        Gravida lorem ligula quis ligula pellentesque congue semper felis
                        maecenas rutrum euismod nibh class aptent taciti.
                    </p>
                    <ul className="nospace clear points">
                        <li>
                            <a href="#">
                                <i className="fas fa-equals" />
                            </a>
                            <h6 className="heading">Sociosqu ad litora torquent</h6>
                            <p>
                                Per conubia nostra per inceptos himenaeos mauris lectus enim
                                luctus vitae viverra a pharetra mollis diam aliquam.
                            </p>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-exclamation-circle" />
                            </a>
                            <h6 className="heading">Sociosqu ad litora torquent</h6>
                            <p>
                                Per conubia nostra per inceptos himenaeos mauris lectus enim
                                luctus vitae viverra a pharetra mollis diam aliquam.
                            </p>
                        </li>
                    </ul>
                </figure>
                <div className="one_half last">
                    <a className="imgover" href="#">
                        <img src="images/demo/480x300.png" alt="" />
                    </a>
                </div>
                {/* ################################################################################################ */}
            </section>
        </div>
    )
}

export default About;