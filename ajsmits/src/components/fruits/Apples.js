const Apples = () => {
    return (

        <div className="wrapper row2">
            <section className="hoc container clear">
                {/* ################################################################################################ */}
                <div className="sectiontitle">

                    {/*<p className="nospace font-xs">Apples have religious and mythological significance in many cultures</p>*/}
                    <h6 className="heading">A. en J. Smits Apples</h6>

                </div>
                <ul id="latest" className="nospace group sd-third">
                    <li className="one_third first">
                        <article>
                            <figure>
                                <a className="imgover" href="#">
                                    <img src="/images/demo/boskoop.jpg" alt="" />
                                </a>
                                <figcaption>
                                    <h6 className="heading">Red Boskoop Apples</h6>

                                </figcaption>
                            </figure>
                            <p>
                                Belle de Boskoop apples are distinctive looking because they tend to be lumpy and irregular in shape and fairly large in size.
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
                                    <img src="/images/demo/elstar.jpg" alt="" />
                                </a>
                                <figcaption>
                                    <h6 className="heading">Elstar Apples</h6>

                                </figcaption>
                            </figure>
                            <p>
                                Elstar apples are small to moderately sized fruits, averaging 7 to 8 centimeters in diameter, and are round to conic in shape, sometimes exhibiting a slightly lopsided appearance, depending on growing conditions. The skin is bright yellow, covered in large patches of dark red to orange, marbled blush, and has a semi-chewy consistency with a subtly ribbed texture.
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
                                    <img src="/images/demo/kanzi.jpg" alt="" />
                                </a>
                                <figcaption>
                                    <h6 className="heading">Kanzi Apples</h6>

                                </figcaption>
                            </figure>
                            <p>
                                Kanzi apples look like a classic example of this fruit—round, medium in size, and deep red or red-yellow/red-orange overlaid on yellow. The flesh is firm, white, and fragrant, and the texture is both crunchy and slightly effervescent.
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

export default Apples;