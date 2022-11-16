import React from 'react';

export const FruitCard = ({ fruit }) => {
    return (
        <li className="one_third fruits">
            <article>
                <figure>
                    <a className="imgover" href="/fruit/fruits">
                        <img src={fruit.imageUrl} alt="fruits" />
                    </a>
                    <figcaption>
                        <h6 className="heading">{fruit.variety}</h6>

                    </figcaption>
                </figure>
                <p>
                    {`${fruit.description.substring(0, 200)} ...`}
                </p>
                <footer>
                    <a href="/">Read More</a>
                </footer>
            </article>
        </li>
    )
}