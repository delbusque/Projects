import React from 'react';
import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore'
import { db, auth } from '../../firebaseConfig.js'

import { FruitCard } from './FruitCard.js';


const Apples = () => {

    const [apples, setApples] = useState([]);
    const refApples = collection(db, 'apples');

    useEffect(() => {
        getDocs(refApples)
            .then(snapshot => {
                snapshot.docs.forEach(apple => setApples(oldState => [...oldState, { ...apple.data(), id: apple.id }]))
            })
    }, [])

    return (

        <div className="wrapper row2">
            <section className="hoc container clear">
                <div className="sectiontitle">

                    {/*<p className="nospace font-xs">Apples have religious and mythological significance in many cultures</p>*/}
                    <h6 className="heading">Fruit Company Apples</h6>

                </div>

                <ul id="latest" className="nospace group sd-third">

                    {apples.map(apple =>
                        <FruitCard key={apple.id} fruit={apple} />
                    )}

                </ul>
                {/* ################################################################################################ */}
            </section>
        </div>
    )
}

export default Apples;