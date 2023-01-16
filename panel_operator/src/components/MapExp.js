import React, {useState} from "react";
import '../scss/main.scss';
import {CSSTransition} from "react-transition-group";
import decoration from "../assets/Decoration.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import stoz1 from '../assets/Stoz/Stoz_1.jpg';
import stoz2 from '../assets/Stoz/Stoz_2.jpg';
import stoz3 from '../assets/Stoz/Stoz_3.jpg';
import stoz4 from '../assets/Stoz/Stoz_4.jpg';
import skosP1 from '../assets/SkosProsty/SkosP_1.jpg';
import skosP2 from '../assets/SkosProsty/SkosP_2.jpg';
import skosP3 from '../assets/SkosProsty/SkosP_3.jpg';
import skosP4 from '../assets/SkosProsty/SkosP_4.jpg';
import Kzam1 from '../assets/KonturZamkniety/Zam1.jpg';
import Kzam2 from '../assets/KonturZamkniety/Zam2.jpg';
import Kzam3 from '../assets/KonturZamkniety/Zam3.jpg';
import Kzam4 from '../assets/KonturZamkniety/Zam4.jpg';
import conturCloseExe1 from '../assets/KonturZamkniety/Exer1.jpg';
import conturCloseExe2 from '../assets/KonturZamkniety/Exer2.jpg';
import conturCloseExe3 from '../assets/KonturZamkniety/Exer3.jpg';
import otwarty1 from '../assets/KonturOtwarty/otw1.jpg';
import otwarty2 from '../assets/KonturOtwarty/otw2.jpg';
import otwarty3 from '../assets/KonturOtwarty/otw3.jpg';
import otwarty4 from '../assets/KonturOtwarty/otw4.jpg';
import openContur1 from '../assets/KonturOtwarty/otw1Exe.jpg';
import openContur2 from '../assets/KonturOtwarty/otw2Exe.jpg';
import szyk1 from '../assets/szykLiniowy_kolowy/szyk1.jpg';
import szyk2 from '../assets/szykLiniowy_kolowy/szyk2.jpg';
import szyk3 from '../assets/szykLiniowy_kolowy/szyk3.jpg';
import szyk4 from '../assets/szykLiniowy_kolowy/szyk4.jpg';
import szyk5 from '../assets/szykLiniowy_kolowy/szyk5.jpg';
import szyk1Zad from '../assets/szykLiniowy_kolowy/zadLinear1.jpg';
import szyk2Zad from '../assets/szykLiniowy_kolowy/zadLinear2.jpg';
import szyk3Zad from '../assets/szykLiniowy_kolowy/zadLinear3.jpg';



const MapExp = () => {

    const [displayOnFirst, setDisplayOnFirst] = useState(false);
    const [currentValueFirst, setCurrentValueFirst] = useState('none');

    const [displayOnSec, setDisplayOnSec] = useState(false);
    const [currentValueSec, setCurrentValueSec] = useState('none');

    const [displayOnThird, setDisplayOnThird] = useState(false);
    const [currentValueThird, setCurrentValueThird] = useState('none');

    const [displayOnFour, setDisplayOnFour] = useState(false);
    const [currentValueFour, setCurrentValueFour] = useState('none');

    const [displayOnFive, setDisplayOnFive] = useState(false);
    const [currentValueFive, setCurrentValueFive] = useState('none');

    const [displayWelcomeSection, setDisplayWelcomeSection] = useState('block');
    const [displayFirstExample, setDisplayFirstExample] = useState('none');
    const [displayFirstExer, setDisplayFirstExer] = useState('none');
    const [displaySecExer, setDisplaysSecExer] = useState('none');
    const [displayThirdExer, setDisplaysThirdExer] = useState('none');
    const [displaySecExample, setDisplaySecExample] = useState('none');
    const [displayFirstExerCur, setDisplayFirstExerCur] = useState('none');
    const [displaySecExerCur, setDisplaySecExerCur] = useState('none');
    const [displayThirdExample, setDisplayThirdExample] = useState('none');
    const [displayFirstExerThird, setDisplayFirstExerThird] = useState('none');
    const [displaySecExerThird, setDisplaysSecExerThird] = useState('none');
    const [displayThirdExerThird, setDisplaysThirdExerThird] = useState('none');
    const [displayFourExample, setDisplayFourExample] = useState('none');
    const [displayFirstExerFour, setDisplayFirstExerFour] = useState('none');
    const [displaySecExerFour, setDisplaysSecExerFour] = useState('none');
    const [displayThirdExerFour, setDisplaysThirdExerFour] = useState('none');
    const [displayFiveExample, setDisplayFiveExample] = useState('none');
    const [displayFirstExerFive, setDisplayFirstExerFive] = useState('none');
    const [displaySecExerFive, setDisplaysSecExerFive] = useState('none');
    const [displayThirdExerFive, setDisplaysThirdExerFive] = useState('none');

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

    const handleOneClickFive = (value) => {
        setDisplayOnFive(prevState => !prevState)
        setCurrentValueFive(value)
    }

    const handleFirstExp = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplaysSecExer('none')
        setDisplayFirstExample('block')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')

    }

    const handleFirstExercise = (e) => {
        e.preventDefault()
        setDisplayFirstExer('block')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleSecExercise = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('block')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleThirdExercise = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('block')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleSecExample = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('block')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }
    const handleFirstExerciseCur = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('block')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleSecExerciseCur = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('block')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleThirdExampleStreight = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('block')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleFirstExampleZcon = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('block')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleSecExampleZcon = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('block')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleThirdExampleZcon = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('block')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleFourExampleConturOpen = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('block')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleFirstExerciseConturOpen = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('block')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleSecExerciseConturOpen = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplayFirstExample('none')
        setDisplaysSecExer('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('block')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleFiveExp = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplaysSecExer('none')
        setDisplayFirstExample('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('block')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }

    const handleFirstExerLinear= (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplaysSecExer('none')
        setDisplayFirstExample('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('block')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
    }
    const handleSecExerRound = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplaysSecExer('none')
        setDisplayFirstExample('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('block')
        setDisplaysThirdExerFive ('none')
    }
    const handleThirdExerRound = (e) => {
        e.preventDefault()
        setDisplayFirstExer('none')
        setDisplayWelcomeSection('none')
        setDisplaysSecExer('none')
        setDisplayFirstExample('none')
        setDisplaysThirdExer('none')
        setDisplaySecExample('none')
        setDisplayFirstExerCur('none')
        setDisplaySecExerCur('none')
        setDisplayThirdExample('none')
        setDisplayFirstExerThird('none')
        setDisplaysSecExerThird ('none')
        setDisplaysThirdExerThird ('none')
        setDisplayFourExample ('none')
        setDisplayFirstExerFour('none')
        setDisplaysSecExerFour('none')
        setDisplaysThirdExerFour('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('none')
        setDisplayFiveExample ('none')
        setDisplayFirstExerFive ('none')
        setDisplaysSecExerFive ('none')
        setDisplaysThirdExerFive ('block')
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
                            <p className='welcome__content__text'>Wykonaj stożek zewnetrzny, średnicy podstawy 10
                                mm,<br/> kąt stożka wynosi 30 st. a wysokość 10 mm.<br/>
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
                            <p className='welcome__content__text'>Wykonaj stożek wewnetrzny, średnicy podstawy 12
                                mm,<br/> kąt stożka wynosi 22,5 st. a wysokość 4 mm.<br/>
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
                            <p className='welcome__content__text'>Wykonaj stożek zewnetrzny, średnicy podstawy 5
                                mm,<br/> kąt stożka wynosi (należy obliczyć), a wysokość 6,5 mm.<br/>
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
                        <img src={skosP2} alt='skosP2'/>
                        <img src={skosP3} alt='skosP3'/>
                        <img src={skosP4} alt='skosP4'/>
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
                            <p className='welcome__content__text'>Wykonaj skos zewnetrzny, o długości 200 mm,<br/> kąt
                                skosu wynosi 30 st. a wysokość 10 mm.<br/>
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
                            <p className='welcome__content__text'>Wykonaj skos wewnętrzny, o długości 125 mm,<br/> kąt
                                skosu wynosi 60 st. a wysokość 18 mm.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }

    const carouselSectionThird = () => {


        return (
            <section className='firstExample' style={
                {
                    display: displayThirdExample
                }
            }>
                <div className='wrapper'>
                    <Carousel>
                        <img src={Kzam1} alt='Kzam1'/>
                        <img src={Kzam2} alt='Kzam2'/>
                        <img src={Kzam3} alt='Kzam3'/>
                        <img src={Kzam4} alt='Kzam4'/>
                    </Carousel>
                </div>
            </section>
        )
    }

    const firstExeConturClose = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayFirstExerThird
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 1</h1>
                            <p className='welcome__content__text'>Wykonaj kontur zamknięty, kiesznie wykonaj wg. obrazka
                                poniżej.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='welcome__content__img' src={conturCloseExe1} alt='exer1'/>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }
    const secExeConturClose = () => {

        return (
            <section className="welcome" style={
                {
                    display: displaySecExerThird
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 2</h1>
                            <p className='welcome__content__text'>Wykonaj kontur zamknięty, kiesznie wykonaj wg. obrazka
                                poniżej.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='welcome__content__img' src={conturCloseExe2} alt='exer1'/>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }
    const thirdExeConturClose = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayThirdExerThird
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 3</h1>
                            <p className='welcome__content__text'>Wykonaj kontur zamknięty, kiesznie wykonaj wg. obrazka
                                poniżej.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='welcome__content__img' src={conturCloseExe3} alt='exer1'/>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }

    const carouselSectionFour = () => {


        return (
            <section className='firstExample' style={
                {
                    display: displayFourExample
                }
            }>
                <div className='wrapper'>
                    <Carousel>
                        <img src={otwarty1} alt='Kotw1'/>
                        <img src={otwarty2} alt='Kotw2'/>
                        <img src={otwarty3} alt='Kotw3'/>
                        <img src={otwarty4} alt='Kotw4'/>
                    </Carousel>
                </div>
            </section>
        )
    }

    const firstExeConturOpen = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayFirstExerFour
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 1</h1>
                            <p className='welcome__content__text'>Wykonaj kontur otwarty, obrys wykonaj wg. obrazka
                                poniżej.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='welcome__content__img' src={openContur1} alt='exer1'/>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }

    const secExeConturOpen = () => {

        return (
            <section className="welcome" style={
                {
                    display: displaySecExerFour
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 2</h1>
                            <p className='welcome__content__text'>Wykonaj kontur otwarty, obrys wykonaj wg. obrazka
                                poniżej.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='welcome__content__img' src={openContur2} alt='exer2'/>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }

    const thirdExeConturOpen = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayThirdExerFour
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 3</h1>
                            <p className='welcome__content__text'>Wykonaj kontur otwarty, obrys wykonaj wg. obrazka
                                poniżej.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='welcome__content__img' src={conturCloseExe1} alt='exer1'/>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }

    const carouselSectionFive = () => {


        return (
            <section className='firstExample' style={
                {
                    display: displayFiveExample
                }
            }>
                <div className='wrapper'>
                    <Carousel>
                        <img src={szyk1} alt='Szyk1'/>
                        <img src={szyk2} alt='Szyk2'/>
                        <img src={szyk3} alt='Szyk3'/>
                        <img src={szyk4} alt='Szyk4'/>
                        <img src={szyk5} alt='Szyk5'/>
                    </Carousel>
                </div>
            </section>
        )
    }

    const firstExeLinearArray = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayFirstExerFive
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 1</h1>
                            <p className='welcome__content__text'>Wykonaj szyk liniowy, wg. obrazka
                                poniżej.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='welcome__content__img' src={szyk1Zad} alt='exer1'/>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }
    const secExeRoundArray = () => {

        return (
            <section className="welcome" style={
                {
                    display: displaySecExerFive
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 2</h1>
                            <p className='welcome__content__text'>Wykonaj szyk kołowy, wg. obrazka
                                poniżej.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='welcome__content__img' src={szyk2Zad} alt='exer1'/>
                        <img className='main__decoration' src={decoration} alt='decoration'/>
                    </div>
                </div>
            </section>
        )
    }

    const thirdExeRoundArray = () => {

        return (
            <section className="welcome" style={
                {
                    display: displayThirdExerFive
                }
            }>
                <div className='wrapper'>
                    <div className='welcome__content'>
                        <img className='welcome__decoration' src={decoration} alt='decoration'/>
                        <div className='welcome__content__list'>
                            <h1 className='welcome__content__header'>Zadanie 3</h1>
                            <p className='welcome__content__text'>Wykonaj szyk liniowo-kołowy, wg. obrazka
                                poniżej.<br/>
                                (zaglądaj do gotowych rozwiązań tylko w ostateczności) </p>
                        </div>
                        <img className='welcome__content__img' src={szyk3Zad} alt='exer1'/>
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
                                        <button className='mapExp__container__link' onClick={handleFirstExp}>Objaśnienie
                                            na przykładzie
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleFirstExercise}>Zadanie 1
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link' onClick={handleSecExercise}>Zadanie
                                            2
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleThirdExercise}>Zadanie 3
                                        </button>
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
                                        <button className='mapExp__container__link'
                                                onClick={handleSecExample}>Objaśnienie na przykładzie
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleFirstExerciseCur}>Zadanie 1
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleSecExerciseCur}>Zadanie 2
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleThirdExercise}>Zadanie 3
                                        </button>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <button className='btn__link'
                                        onClick={() => handleOnClickThird(displayOnThird ? "none" : "block")}
                                >Kontur zamknięty
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
                                        <button className='mapExp__container__link'
                                                onClick={handleThirdExampleStreight}>Objaśnienie na przykładzie
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleFirstExampleZcon}>Zadanie 1
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleSecExampleZcon}>Zadanie 2
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleThirdExampleZcon}>Zadanie 3
                                        </button>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <button className='btn__link'
                                        onClick={() => handleOnClickFour(displayOnFour ? "none" : "block")}
                                >Kontur otwarty
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
                                        <button className='mapExp__container__link'
                                                onClick={handleFourExampleConturOpen}>Objaśnienie na przykładzie
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleFirstExerciseConturOpen}>Zadanie 1
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleSecExerciseConturOpen}>Zadanie 2
                                        </button>
                                    </li>
                                    {/*<li className='mapExp__container__row'>*/}
                                    {/*    <button className='mapExp__container__link'*/}
                                    {/*            onClick={handleThirdExerciseConturOpen}>Zadanie 3*/}
                                    {/*    </button>*/}
                                    {/*</li>*/}
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <button className='btn__link'
                                        onClick={() => handleOneClickFive(displayOnFive ? "none" : "block")}
                                >Szyk Liniowy/kołowy
                                </button>
                            </div>
                            <CSSTransition
                                in={displayOnFive}
                                appear={true}
                                timeout={1000}
                                classNames='menu-primary'>
                                <ul className='mapExp__container__secList' style={
                                    {
                                        display: currentValueFive
                                    }
                                }>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleFiveExp}>Objaśnienie na przykładzie
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleFirstExerLinear}>Zadanie 1
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleSecExerRound}>Zadanie 2
                                        </button>
                                    </li>
                                    <li className='mapExp__container__row'>
                                        <button className='mapExp__container__link'
                                                onClick={handleThirdExerRound}>Zadanie 3
                                        </button>
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
                    {carouselSectionThird()}
                    {firstExeConturClose()}
                    {secExeConturClose()}
                    {thirdExeConturClose()}
                    {carouselSectionFour()}
                    {firstExeConturOpen()}
                    {secExeConturOpen()}
                    {thirdExeConturOpen()}
                    {carouselSectionFive()}
                    {firstExeLinearArray ()}
                    {secExeRoundArray ()}
                    {thirdExeRoundArray ()}
                </div>
            </div>
        </section>
    )
}

export default MapExp;