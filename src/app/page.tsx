"use client"; // this is a client component 👈🏽
import '../styles/globals.css'

export default function page() {
  return (
    <div>
      <main>
        <div className='container-home'>
          <div className='left'>
          <div style={{margin:"2rem"}}><h2 style={{color:"hsla(240, 11%, 93%, 0.902)"}}>Working on proprietary software for Fidelity Information Services and Fullstack solutions for Strategic Legal Practices has given me a wealth of knowledge towards making your ideas functional.</h2></div>
          <div style={{margin:"1rem", marginLeft:"2rem"}}><h2 style={{color:"hsla(240, 11%, 93%, 0.902)"}}>Consultations are free!</h2></div>
          <div className="my-button-home" style={{margin:"2rem", maxWidth:"35%"}}>
            <button 
              style={{
                borderColor:"hsla(240, 11%, 93%, 0)",
                backgroundColor:"hsla(240, 11%, 93%, 0)", 
                color:"#0b81bc", 
                alignItems:"center", 
                padding: "1rem 2rem", 
                display: "block"}}
              onClick={() => window.location.href = '/about'}
            >
              Learn More
            </button>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
