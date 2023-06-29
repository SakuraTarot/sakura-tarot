import React from 'react'
import Stellar from '../../assets/Stellar Journey.svg';
import Hands from '../../assets/hands-image.svg'
import Button from '../button/Button';
import './MainIntro.css'

export default function MainIntro() {
    return (
        <section className="main-intro">
            <div className="images">
                <img className="logo" src={Stellar} alt="Stellar Journey logo" />
                <img className="hands" src={Hands} alt="Hands holding some stars" />
            </div>
            <div className="text">
                <h1>Clow Tarot</h1>
                <p>Esta es una lectura de tres cartas:</p>
                <p>The left card represents events in your past.</p>
                <p>The one in the center represents the present.</p>
                <p>The card to the right represents the future.</p>
                <p>Click the button below to choose your cards!</p>
            </div>
            <Button/>
        </section>
    )

}