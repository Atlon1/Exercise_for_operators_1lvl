import React from "react";
import '../scss/main.scss';
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import decoration from "../assets/Decoration.svg";
import slide1 from  "../assets/mill_1.jpg";
import slide2 from  "../assets/mill_2.jpg";
import slide3 from  "../assets/mill_3.jpg";
import slide4 from  "../assets/mill_4.jpg";
import slide5 from  "../assets/mill_5.jpg";




const Main = () => {


    const imgStyles = {
        width: "100%",
        height: "590px",
        objectFit: "cover"
    };

    const imgs = [
        slide1, slide4, slide2, slide5, slide3
    ];

    const loadingImage =
        slide3;

    const settings = {
        lazyload: true,
        nav: false,
        mouseDrag: true,
        loop: true,
        items: 1,
        gutter: 5,
        autoplay: true,
        speed: 400,
        responsive: {
            420: {
                items: 1
            }
        }
    };

    return (
        <section className='main'>
            <div className='wrapper'>
                <div className='main__content'>
                    <img className='main__decoration' src={decoration} alt='decoration'/>
                    <h1>Witaj w Panel operatora!</h1>
                    <div className='main__content__text'>
                        Panel bedzie miał za zadnie, przekazywać praktyczną wiedzę dla operatorów 1 poziomu. <br/> Moduł szkoleniowy bedzie zaiwerał:
                        <ul className='main__content__list'>
                            <li>Program na stożek.</li>
                            <li>Program na skos prosty.</li>
                            <li>Program na Kontur otwarty.</li>
                            <li>Program na kontur zamknięty.</li>
                            <li>Program na Szyk liniowy.</li>
                        </ul>
                    </div>
                    <img className='main__decoration' src={decoration} alt='decoration'/>
                </div>
                <TinySlider settings={settings}>
                    {imgs.map((el, index) => (
                        <div key={index} style={{position: "relative"}}>
                            <img
                                className={`tns-lazy-img`}
                                src={loadingImage}
                                data-src={el}
                                alt=""
                                style={imgStyles}
                            />
                        </div>
                    ))}
                </TinySlider>
            </div>
        </section>
    )
}

export default Main;