const Slider = () => {

    return (
        <>
            <section className="slider_section">
                <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img className="first-slide" src="images/banner.jpg" alt="First slide" />
                            <div className="container">
                                <div className="carousel-caption relative">
                                    <h1>A. en J. SMITS</h1>
                                    <span>Apples and pears company</span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi{" "}
                                    </p>
                                    <a className="buynow" href="#about">
                                        About us
                                    </a>
                                    <a className="buynow ggg" href="#">
                                        Get a quote
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider;