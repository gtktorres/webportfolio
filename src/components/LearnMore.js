'use client'
import '../styles/globals.css'
import React from 'react';

const LearnMore = () => {
  return (
    <button 
              style={{
                borderColor:"hsla(240, 11%, 93%, 0)",
                backgroundColor:"hsla(240, 11%, 93%, 0)", 
                color:"#0b81bc", 
                alignItems:"center", 
                padding: "1rem 2rem", 
                display: "block",
                cursor: "pointer"}}                
              onClick={() => window.location.href = '/about'}
            >
              Learn More
            </button>
    );}
export default LearnMore;