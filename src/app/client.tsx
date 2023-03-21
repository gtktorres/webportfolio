
"use client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./Component/About";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import React, { Component } from 'react';


      
export class Client extends Component {
    render() {
        return (
            <Router>                                                                        
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects/>} />
                        </Routes>
            </Router>
        )
    }
}

    