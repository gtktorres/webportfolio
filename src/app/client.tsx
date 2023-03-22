
"use client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import Projects from '../components/Projects'
import React, { Component } from 'react';
import '../styles/client.css'


      
export default class Client extends Component {
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

    