import React from 'react';

const Pears = () => {
    return (
        <div className="wrapper row2">
            <section className="hoc container clear">
                {/* ################################################################################################ */}
                <div className="sectiontitle">

                    {/*<p className="nospace font-xs">Apples have religious and mythological significance in many cultures</p>*/}
                    <h6 className="heading">Fruit Company Pears</h6>

                </div>
                <ul id="latest" className="nospace group sd-third">
                    <li className="one_third first">
                        <article>
                            <figure>
                                <a className="imgover" href="#">
                                    <img src="/images/demo/conference.jpg" alt="" />
                                </a>
                                <figcaption>
                                    <h6 className="heading">Conference Pears</h6>

                                </figcaption>
                            </figure>
                            <p>
                                Conference pears are medium to large in size and have a narrow, rounded base that tapers to a long and thin neck connecting to a green-brown stem. The mottled, thick skin is green with patches of brown russeting and transforms into a pale yellow when ripe.
                            </p>
                            <footer>
                                <a href="#">Read More</a>
                            </footer>
                        </article>
                    </li>
                    <li className="one_third">
                        <article>
                            <figure>
                                <a className="imgover" href="#">
                                    <img src="/images/demo/lucas.jpg" alt="" />
                                </a>
                                <figcaption>
                                    <h6 className="heading">Alexander Lucas Pears</h6>

                                </figcaption>
                            </figure>
                            <p>
                                Beurre Alexander Lucas pears are large, bulbous fruits with a round to conical, curved shape. The skin is semi-smooth, firm, and thin, ripening from green to yellow, and there is some russeting found on the shoulders around the fibrous stem.
                            </p>
                            <footer>
                                <a href="#">Read More</a>
                            </footer>
                        </article>
                    </li>
                    <li className="one_third">
                        <article>
                            <figure>
                                <a className="imgover" href="#">
                                    <img src="/images/demo/forelle.jpg" alt="" />
                                </a>
                                <figcaption>
                                    <h6 className="heading">Forelle Pears</h6>

                                </figcaption>
                            </figure>
                            <p>
                                Forelle pears are small in size, averaging 5-7 centimeters in length, and are symmetrical in shape with a rounded, bell-shaped base tapering to a short neck with a slender light green stem. The smooth, thin skin transforms from green to yellow when ripe and is covered in red blushing, crimson lenticels or pores, and has a slightly waxy sheen.
                            </p>
                            <footer>
                                <a href="#">Read More</a>
                            </footer>
                        </article>
                    </li>
                </ul>
                {/* ################################################################################################ */}
            </section>
        </div>
    )
}

export default Pears;