const Footer = () => {
    return (
        <footr>
            <div className="footer top_layer ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="address">
                                <a href="index.html">
                                    {" "}
                                    <img src="images/logo.png" alt="logo" />
                                </a>
                                <p>
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et sdolor sit amet, consectetur
                                    adipiscing elit,{" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="address">
                                <h3>Quick links</h3>
                                <ul className="Links_footer">
                                    <li>
                                        <img src="icon/3.png" alt="#" /> <a href="#"> Join Us</a>{" "}
                                    </li>
                                    <li>
                                        <img src="icon/3.png" alt="#" /> <a href="#">Maintenance</a>{" "}
                                    </li>
                                    <li>
                                        <img src="icon/3.png" alt="#" />{" "}
                                        <a href="#">Language Packs</a>{" "}
                                    </li>
                                    <li>
                                        <img src="icon/3.png" alt="#" /> <a href="#">LearnPress</a>{" "}
                                    </li>
                                    <li>
                                        <img src="icon/3.png" alt="#" />{" "}
                                        <a href="#">Release Status</a>{" "}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="address">
                                <h3>Subcribe email</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                                </p>
                                <input className="form-control" placeholder="Your Email" type="type" name="Your Email" />
                                <button className="submit-btn">Submit</button>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="address">
                                <h3>Contact Us</h3>
                                <ul className="loca">
                                    <li>
                                        <a href="#">
                                            <img src="icon/loc.png" alt="#" />
                                        </a>
                                        London 145
                                        <br />
                                        United Kingdom{" "}
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="icon/email.png" alt="#" />
                                        </a>
                                        demo@gmail.com{" "}
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="icon/call.png" alt="#" />
                                        </a>
                                        +12586954775{" "}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <p>
                        © 2019 All Rights Reserved. Design By
                        <a href="https://html.design/"> Free Html Templates</a>
                    </p>
                </div>
            </div>
        </footr>
    )
}

export default Footer;