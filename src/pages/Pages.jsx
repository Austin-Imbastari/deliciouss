import React from "react";
//components
import Home from "./Home";
import Cuisine from "./Cuisine";
//react router
import { Route, Routes } from "react-router-dom";

function Pages() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
            </Routes>
        </>
    );
}

export default Pages;
