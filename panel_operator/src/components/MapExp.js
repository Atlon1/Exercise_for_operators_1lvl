import React, {useState} from "react";
import '../scss/main.scss';
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import decoration from "../assets/Decoration.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import stoz1 from '../assets/Stoz/Stoz_1.jpg';
import stoz2 from '../assets/Stoz/Stoz_2.jpg';
import stoz3 from '../assets/Stoz/Stoz_3.jpg';
import stoz4 from '../assets/Stoz/Stoz_4.jpg';


const MapExp = () => {

    const [displayOnFirst, setDisplayOnFirst] = useState(false);
    const [currentValueFirst, setCurrentValueFirst] = useState('none');

    const [displayOnSec, setDisplayOnSec] = useState(false);
    const [currentValueSec, setCurrentValueSec] = useState('none');

    const [displayOnThird, setDisplayOnThird] = useState(false);
    const [currentValueThird, setCurrentValueThird] = useState('none');

    const [displayOnFour, setDisplayOnFour] = useState(false);
    const [currentValueFour, setCurrentValueFour] = useState('none');

    const [displayWelcomeSection, setDisplayWelcomeSection] = useState('block');
    const [displayFirstExample, setDisplayFirstExample] = useState('none');


    const handleOnClickFirst = (value) => {
        setDisplayOnFirst(prevState => !prevState)
        setCurrentValueFirst(value);
    }
    const handleOnClickSec = (value) => {
        setDisplayOnSec(prevState => !prevState)
        setCurrentValueSec(value);
    }
    const handleOnClickThird = (value) => {
        setDisplayOnThird(prevState => !prevState)
        setCurrentValueThird(value);
    }
    const handleOnClickFour = (value) => {
        setDisplayOnFour(prevState => !prevState)
        setCurrentValueFour(value);
    }

    const handleFirstExp = (e) => {
        e.preventDefault()
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('block')

    }

    const secContainerSection = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayWelcomeSection
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <h1>Wybierz co cie interesuje!</h1>
                        <div className='welcome__content__text'> Po lewej do wyboru masz zagadnienia!
                            <ul className='welcome__content__list'>
                                <li>Objaśnienie zadania</li>
                                <li>Zadanie 1,</li>
                                <li>Zadanie 2,</li>
                                <li>Zadanie 3.</li>
                            </ul>
                        </div>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }

    const carouselSectionFirst = () => {


        return (
            <section className='firstExample' style={
                {
                    display: displayFirstExample
                }
            }>
                <div className='wrapper'>
                    <Carousel>
                        <img src={stoz2} alt='stoz2'/>
                        <img src={stoz1} alt='stoz1'/>
                        <img src={stoz3} alt='stoz3'/>
                        <img src={stoz4} alt='stoz4'/>
                    </Carousel>
                </div>
            </section>
        )
    }

    return (
        <section className='mapExp'>
            <div className='wrapper'>
                <div className='mapExp__container'>
                    <div className='mapExp__container__list'>
                        <li className='list__item'>
                            <div className='list__link'>
                                <button className='btn__link'
                                        onClick={() => handleOnClickFirst(displayOnFirst ? "none" : "block")}
                                >Program na stożek
                                </button>
                            </div>
                            <CSSTransition
                                in={displayOnFirst}
                                appear={true}
                                timeout={1000}
                                classNames='menu-primary'>
                                <ul className='mapExp__container__secList' style={
                                    {
                                        display: currentValueFirst
                                    }
                                }>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link' onClick={handleFirstExp}>Objaśnienie na przykładzie</button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'>Zadanie 1</button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'>Zadanie 2</button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'>Zadanie 3</button>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <button className='btn__link'
                                        onClick={() => handleOnClickSec(displayOnSec ? "none" : "block")}
                                >Program na stożek
                                </button>
                            </div>
                            <CSSTransition
                                in={displayOnSec}
                                appear={true}
                                timeout={1000}
                                classNames='menu-primary'>
                                <ul className='mapExp__container__secList' style={
                                    {
                                        display: currentValueSec
                                    }
                                }>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Objaśnienie na przykładzie</Link>
                                        </div>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Zadanie 1</Link>
                                        </div>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Zadanie 2</Link>
                                        </div>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Zadanie 3</Link>
                                        </div>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <button className='btn__link'
                                        onClick={() => handleOnClickThird(displayOnThird ? "none" : "block")}
                                >Program na stożek
                                </button>
                            </div>
                            <CSSTransition
                                in={displayOnThird}
                                appear={true}
                                timeout={1000}
                                classNames='menu-primary'>
                                <ul className='mapExp__container__secList' style={
                                    {
                                        display: currentValueThird
                                    }
                                }>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Objaśnienie na przykładzie</Link>
                                        </div>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Zadanie 1</Link>
                                        </div>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Zadanie 2</Link>
                                        </div>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Zadanie 3</Link>
                                        </div>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <button className='btn__link'
                                        onClick={() => handleOnClickFour(displayOnFour ? "none" : "block")}
                                >Program na stożek
                                </button>
                            </div>
                            <CSSTransition
                                in={displayOnFour}
                                appear={true}
                                timeout={1000}
                                classNames='menu-primary'>
                                <ul className='mapExp__container__secList' style={
                                    {
                                        display: currentValueFour
                                    }
                                }>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Objaśnienie na przykładzie</Link>
                                        </div>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Zadanie 1</Link>
                                        </div>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Zadanie 2</Link>
                                        </div>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <div className='mapExp__container__link'>
                                            <Link to='/'>Zadanie 3</Link>
                                        </div>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                    </div>
                </div>
                <div className='mapExp__containerSec'>
                    {secContainerSection()}
                    {carouselSectionFirst()}
                </div>
            </div>
        </section>
    )
}

export default MapExp;