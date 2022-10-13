import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Router/Home";
import Excersaize from "./Router/Excersaize";


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/excersize' element={<Excersaize/>}/>
        </Routes>
      </BrowserRouter>
  )
}
