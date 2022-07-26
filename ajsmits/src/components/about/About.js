const About = () => {
    return (

        <div id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
                        <div className="about_box">
                            <h2>
                                About A en J Smits
                                <br />
                                <strong className="black"> Fruits company</strong>
                            </h2>
                            <p>
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
                        <div className="about_img">
                            <figure>
                                <img src="images/about-2.png" alt="img" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;