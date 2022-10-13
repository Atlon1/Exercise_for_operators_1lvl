import React, {useState} from "react";
import '../scss/main.scss';
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import decoration from "../assets/Decoration.svg";

const MapExp = () => {

    const [displayOnFirst, setDisplayOnFirst] = useState(false);
    const [currentValueFirst, setCurrentValueFirst] = useState('none');

    const [displayOnSec, setDisplayOnSec] = useState(false);
    const [currentValueSec, setCurrentValueSec] = useState('none');

    const [displayOnThird, setDisplayOnThird] = useState(false);
    const [currentValueThird, setCurrentValueThird] = useState('none');

    const [displayOnFour, setDisplayOnFour] = useState(false);
    const [currentValueFour, setCurrentValueFour] = useState('none');


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

    const secContainerSection = () => {

        return (
            <section className="welcome">
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
                </div>
            </div>
        </section>
    )
}

export default MapExp;