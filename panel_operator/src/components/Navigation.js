import React from "react";
import '../scss/main.scss';
import {Link} from "react-router-dom";
import logo from "../assets/Logo.jpg";


const Navigation = () => {


    return (
        <section className='navigation' id='navigation'>
            <div className='wrapper'>
                <div className='navigation__container'>
                    <img src={logo}/>
                    <div className='navigation__container__content'>
                        <input type='checkbox' className='menu__btn' id="menu__btn"/>
                        <label htmlFor='menu__btn' className='menu__toggle'>
                            <span/>
                            <span/>
                            <span/>
                        </label>
                        <ul className='navigation__list__container'>
                            <li className='list__item'>
                                <div className='list__link'>
                                    <Link to='/'>Start</Link>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='list__link'>
                                    <Link to='/excersize'>Szkolenie dla operatorów</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='loading__bar'></div>
            </div>
        </section>
    )
}

export default Navigation;