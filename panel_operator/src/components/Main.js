import React from "react";
import '../scss/main.scss';
import decoration from "../assets/Decoration.svg"

const Main = () => {

    return (
        <section className='main'>
            <div className='wrapper'>
                <div className='main__content'>
                    <img className='main__decoration' src={decoration}/>
                    <h1>Witaj w Panel operatora!</h1>
                    <div className='main__content__text'>
                        Panel bedzie miał za zadnie przekazywać praktyczną wiedzę dla operatorów 1 poziomu. <br/> Panel będzie sie składał:
                        <ul className='main__content__list'>
                            <li>Program na stożek.</li>
                            <li>Program na skos prosty.</li>
                            <li>Program na Kontur otwarty.</li>
                            <li>Program na kontur zamknięty.</li>
                            <li>Program na Szyk liniowy.</li>
                        </ul>
                    </div>
                    <img className='main__decoration' src={decoration}/>
                </div>
            </div>
        </section>
    )
}

export default Main;