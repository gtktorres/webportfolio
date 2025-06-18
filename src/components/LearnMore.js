'use client'
import '../styles/globals.css'

const LearnMore = () => {
  return (
    <button 
              style={{
                borderColor:"hsla(240, 11%, 93%, 0)",
                backgroundColor:"hsla(240, 11%, 93%, 0)", 
                color:"#066594", 
                padding: "1rem 2rem",
                cursor: "pointer",
                fontSize: "1rem",}}                
              onClick={() => window.location.href = '/about'}
            >
              Learn More
            </button>
    );}
export default LearnMore;