import React from 'react';

const TopSlider = () => {
    return (
        <>
            <div className="bgded overlay padtop" style={{ backgroundImage: 'url("images/demo/backgrounds/slider-1a.jpg")' }}>
                {/* ################################################################################################ */}
                {/* ################################################################################################ */}
                {/* ################################################################################################ */}

                {/* ################################################################################################ */}
                {/* ################################################################################################ */}
                {/* ################################################################################################ */}
                <div id="pageintro" className="hoc clear">
                    {/* ################################################################################################ */}
                    <article>
                        <h3 className="heading">Fruit Company</h3>
                        <p>
                            We grow fresh and healthy fruit on 10-hectare farm in EU. Carefully and with passion our company supplies a varied mix of apples and pears to fruit traders and exporters. Flavour is our mission. What we deliver is your goal.
                        </p>
                        <footer>
                            <ul className="nospace inline pushright">
                                <li>
                                    <a className="btn" href="#">
                                        OUR STORY
                                    </a>
                                </li>
                                <li>
                                    <a className="btn inverse" href="#">
                                        WHAT WE DO
                                    </a>
                                </li>
                            </ul>
                        </footer>
                    </article>
                    {/* ################################################################################################ */}
                </div>
                {/* ################################################################################################ */}
            </div>
        </>
    )
}

export default TopSlider;