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
import skosP1 from '../assets/SkosProsty/SkosP_1.jpg';
import skosP2 from '../assets/SkosProsty/SkosP_2.jpg';
import skosP3 from '../assets/SkosProsty/SkosP_3.jpg';
import skosP4 from '../assets/SkosProsty/SkosP_4.jpg';


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
    const [displayFirstExer, setDisplayFirstExer] = useState('none');
    const [displaySecExer, setDisplaysSecExer] = useState('none');
    const [displayThirdExer, setDisplaysThirdExer] = useState('none');
    const [displaySecExample, setDisplaySecExample] = useState('none');
    const [displayFirstExerCur ,setDisplayFirstExerCur] = useState('none');
    const [displaySecExerCur ,setDisplaySecExerCur] = useState('none');


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
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplaysSecExer('none')
        setDisplayFirstExample('block')
        setDisplaysThirdExer('none')
        setDisplaySecExample ('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
    }

    const handleFirstExercise = (e) => {
        e.preventDefault()
        setDisplayFirstExer('block')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample ('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
    }

    const handleSecExercise = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('block')
        setDisplaysThirdExer('none')
        setDisplaySecExample ('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
    }

    const handleThirdExercise = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('block')
        setDisplaySecExample ('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
    }

    const handleSecExample = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample ('block')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
    }
    const handleFirstExerciseCur = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample ('none')
        setDisplayFirstExerCur('block')
        setDisplaySecExerCur('none')
    }

    const handleSecExerciseCur = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample ('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('block')
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

    const firstExeForCone = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayFirstExer
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                            <div className='welcome__content__list'>
                                <h1 className='welcome__content__header'>Zadanie 1</h1>
                                <p className='welcome__content__text'>Wykonaj stożek zewnetrzny, średnicy podstawy 10 mm,<br/> kąt stożka wynosi 30 st. a wysokość 10 mm.<br/>
                                    (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                            </div>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }


    const secExeForCone = () => {

        return (
            <section className="welcome" style={
                {
                    display: displaySecExer
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 2</h1>
                            <p className='welcome__content__text'>Wykonaj stożek wewnetrzny, średnicy podstawy 12 mm,<br/> kąt stożka wynosi 22,5 st. a wysokość 4 mm.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }

    const thirdExeForCone = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayThirdExer
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 3</h1>
                            <p className='welcome__content__text'>Wykonaj stożek zewnetrzny, średnicy podstawy 5 mm,<br/> kąt stożka wynosi (należy obliczyć), a wysokość 6,5 mm.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }

    const carouselSectionSec = () => {


        return (
            <section className='firstExample' style={
                {
                    display: displaySecExample
                }
            }>
                <div className='wrapper'>
                    <Carousel>
                        <img src={skosP1} alt='skosP1'/>
                        <img src={skosP2} alt='skosP1'/>
                        <img src={skosP3} alt='skosP1'/>
                        <img src={skosP4} alt='skosP1'/>
                    </Carousel>
                </div>
            </section>
        )
    }
    const firstExeForCur = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayFirstExerCur
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 1</h1>
                            <p className='welcome__content__text'>Wykonaj skos zewnetrzny, o długości 200 mm,<br/> kąt skosu wynosi 30 st. a wysokość 10 mm.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }
    const secExeForCur = () => {

        return (
            <section className="welcome" style={
                {
                    display: displaySecExerCur
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 2</h1>
                            <p className='welcome__content__text'>Wykonaj skos wewnętrzny, o długości 125 mm,<br/> kąt skosu wynosi 60 st. a wysokość 18 mm.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
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
                                        <button className='mapExp__container__link' onClick={handleFirstExercise}>Zadanie 1</button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link' onClick={handleSecExercise}>Zadanie 2</button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link' onClick={handleThirdExercise}>Zadanie 3</button>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <button className='btn__link'
                                        onClick={() => handleOnClickSec(displayOnSec ? "none" : "block")}
                                >Program na skos prosty
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
                                        <button className='mapExp__container__link' onClick={handleSecExample}>Objaśnienie na przykładzie</button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link' onClick={handleFirstExerciseCur}>Zadanie 1</button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link' onClick={handleSecExerciseCur}>Zadanie 2</button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link' onClick={handleThirdExercise}>Zadanie 3</button>
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
                    {firstExeForCone()}
                    {secExeForCone()}
                    {thirdExeForCone()}
                    {carouselSectionSec()}
                    {firstExeForCur()}
                    {secExeForCur()}
                </div>
            </div>
        </section>
    )
}

export default MapExp;