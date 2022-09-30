import React from "react";
import '../scss/main.scss';
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Footer from "../components/Footer";




export default function Home() {
    return (
        <>
            <Navigation/>
            <Main/>
            <Footer/>
        </>
    )
}