import React, {useState} from "react";
import '../scss/main.scss';
import {Link} from "react-router-dom";

const MapExp = () => {

    const [displayOn, setDisplayOn] = useState(false);
    const [currentValue, setCurrentValue] = useState('none');


    const handleOnClick = (value) => {
        setDisplayOn(prevState => !prevState)
        setCurrentValue(value);
        console.log(value);
    }



    return (
        <section className='mapExp'>
            <div className='wrapper'>
                <div className='mapExp__container'>
                    <div className='mapExp__container__list'>
                        <li className='list__item'>
                            <div className='list__link'>
                                <button className='btn__link' onClick={() => handleOnClick(displayOn ? "none" : "block")}>Program na stożek</button>
                            </div>
                            <ul className='mapExp__container__secList' style={
                                {
                                    display: currentValue
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
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <Link to='/'>Program na skos prosty.</Link>
                            </div>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <Link to='/'>Program na Kontur otwarty.</Link>
                            </div>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <Link to='/'>Program na kontur zamknięty.</Link>
                            </div>
                        </li>
                        <li className='list__item'>
                            <div className='list__link'>
                                <Link to='/'>Program na Szyk liniowy.</Link>
                            </div>
                        </li>
                    </div>
                </div>
                <div className='mapExp__containerSec'>
                    <div>Przykładowy teskt..</div>
                </div>
            </div>
        </section>
    )
}

export default MapExp;