"use client"; // this is a client component 👈🏽
import React from "react";
import { POST } from "../api/ReserveKit/route";

const Booking = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
    return (
      <div style={{ background: 'hsla(240, 11%, 93%, 1)' }}>
        <main>
          <div className='container-booking'>
            
              <div className='left'>
                <h2 style={{fontSize: "5em", fontKerning: "normal"}}>
                  Schedule your appointment
                </h2>
                <br />
                <p style={{marginTop: "2rem", marginBottom: "5rem"}}>
                Schedule a consultation with our expert team to explore tailor-made software solutions that best fit your needs. Benefit from our in-depth industry knowledge and cutting-edge technology to drive your business forward.  
                </p>
              </div>
            <div className='right' style={{position: "relative", border: "1px dashed black", borderRadius: "25px", padding: 0, marginBottom: "4rem", boxSizing: "border-box"}}>
              <form
              ref={formRef}
              onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                  name: { value: string };
                  email: { value: string };
                };
                const name = target.name.value;
                const email = target.email.value;
                console.log(name, email);
                // Handle form submission logic here
                POST(new Request('/api/ReserveKit', {
                  method: 'POST',
                  body: JSON.stringify({ name, email }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }))
                alert(`Thank you ${name}! We will contact you at ${email}.`);
                if (formRef.current) {
                  formRef.current.reset(); // Reset the form after submission
                }               
              }}
            >

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', marginTop: '3rem' }}>
                  <div>
                      <label
                        style={{ 
                          textAlign: "left",
                          fontSize: "2em",
                          color: "black",
                          borderRadius: "5em",
                          marginLeft: "3.5rem",
                          borderWidth: "1px"
                        }}
                      >
                        Name
                      <input
                        type="name"
                        name="Enter your name"
                        required
                        style={{ padding: "1rem", alignContent: "center", color: "black", marginLeft: "3.5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "80%", height: "4rem",  marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)"}}
                      />
                      </label>
                  </div>
                <div>
                    <label 
                      style={{ 
                        textAlign: "left",
                        fontSize: "2em",
                        color: "black",
                        borderRadius: "5em",
                        marginLeft: "3.5rem",
                        borderWidth: "1px" 
                      }}
                    >
                      Email
                    <input
                      type="email"
                      name="Enter your email"
                      required
                      border-radius="25px"
                      style={{ padding: "1rem", alignContent: "center", color: "black", marginLeft: "3.5rem",  fontSize: "2rem", borderRadius: "25px", display: "block", width: "80%", height: "4rem", background: "hsla(240, 11%, 93%, 0.902)"  }}
                    />
                    </label>
                </div>
                <div>
                  <label
                    style={{ 
                        textAlign: "left",
                        borderRadius: "5em",
                        marginLeft: "5rem",
                        borderWidth: "1px" 
                    }}
                  >
                  <hr style={{margin:"1rem"}}></hr>
                  <button
                    type="submit"
                    style={{ 
                      fontSize: "1.5em",
                      fontWeight: "100",
                      textAlign: "center",
                      color: "hsla(0,0%,100%,1)",
                      borderRadius: "5em",
                      marginLeft: "3.5rem",
                      marginTop: "2rem",
                      marginBottom: "1rem",
                      borderWidth: "1px",
                      backgroundColor: "#0a4e9c",
                      padding: "1rem 2rem",
                      display: "block",
                      width: "35%",
                      height: "5rem",
                      cursor: "pointer"
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (formRef.current) {
                        formRef.current.requestSubmit(); // Trigger form submission
                      }
                    }}
                  >
                    Book Now
                  </button>
                  </label>
                </div>
                
                </div>
            </form>
            
            </div>
          </div>         
        </main>
        <footer></footer>
      </div>
    );
}

export default Booking;