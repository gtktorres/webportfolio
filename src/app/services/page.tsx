"use client";
import React from 'react';
import Image from 'next/image';

import Deskspace from '../../components/Project-Images/deskspace.png'
import Keyboard from '../../components/Project-Images/keyboard-black.png';
import Laptop from '../../components/Project-Images/macbook.png';
import Laptops from '../../components/Project-Images/macbooks.png';

const Services = () => {
    return(
        <div>
            <header>
                   <div className='container-services-header'>
                    <div className='left'>
                        <h2 style={{whiteSpace: "nowrap"}}>Services Provided</h2>
                    </div>
                
                    <div className='right' style={{position: "relative"}}>
                        <p>
                           Schedule your consultation with us today and experience personalized service tailored to your business software needs. Let our experts guide you in finding the optimal solutions to enhance your company&apos;s efficiency.
                        </p>
                    </div>
                    </div>
            </header>

            <main>   

                    <div className='grid-container' >
                        
                        <div className='grid-item' style={{ marginLeft: "5rem"}}>                    
                        <Image 
                            src={Keyboard}
                            alt=''
                            height={200}
                        ></Image>
                        <h2 style={{ marginTop: "2rem"}}>Frontend Website</h2>
                        <p style={{ marginTop: "2rem"}}>$499</p>
                        <p style={{ marginTop: "2rem"}}>In 7 business days, a fully functioning web application with the appropriate client-curated requirements.</p>
                        <div className='my-button' onClick={() => window.location.href="/booking" }>Book Now</div>
                        </div>
                        
                        <div className='grid-item' style={{ marginLeft: "1rem", marginRight: "1rem"}}>
                        <Image 
                            src={Laptop}
                            alt=''
                            height={200}
                        ></Image>
                        <h2 style={{ marginTop: "2rem", marginLeft: "0.5rem"}}>Frontend Website with Authentication + RESTful APIs</h2>
                        <p style={{ marginTop: "2rem", marginLeft: "0.5rem"}}>$1149</p>
                        <p style={{ marginTop: "2rem", marginLeft: "0.5rem"}}>In 14 business days, a fully functioning web application with the appropriate client-curated requirements. Including a backend that provides CRUD APIs, authentication, and authorization.</p>
                        <div className='my-button' onClick={() => window.location.href="/booking" }>Book Now</div>
                        </div>

                        <div className='grid-item' style={{ marginRight: "5rem", justifySelf: "end"}}>
                        <Image 
                            src={Laptops}
                            alt=''
                            height={200}
                        ></Image>
                        <h2 style={{ marginTop: "2rem"}}>Frontend Website with Auth + RESTful APIs + Validations + Third party APIs integration + DB design</h2>
                        <p style={{ marginTop: "2rem"}}>$1854</p>
                        <p style={{ marginTop: "2rem"}}>In 30 business days, a fully functioning web application with the appropriate client-curated requirements. Providing a backend with CRUD APIs, Authentication, and Authorization. Including Database design, API Validation, and 3rd Party API Integration.</p>
                        <div className='my-button' onClick={() => window.location.href="/booking" }>Book Now</div> 
                        </div>                      
                        </div>
                    
                                                                                   
            </main>
            <footer style={{ position: "relative", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Deskspace.src}')`, backgroundRepeat: "no-repeat", backgroundSize: "100%", maxHeight: "100%", maxWidth: "100%", height: "100vh" }}>            
                <div className="center" >
                    <h2 style={{ color: "white", width: "100%", whiteSpace: "nowrap", fontSize: "4em"}}>Schedule a complimentary consultation</h2>
                    <div style={{ fontSize: "1.5em", fontWeight: "100", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <button
                            style={{
                                color: "hsla(240, 11%, 93%, 0.902)", 
                                marginRight: "5rem",
                                marginLeft: "5rem",
                                fontSize: "1.5em",
                                borderRadius: "5em",
                                borderWidth: "0",
                                backgroundColor: "#0a4e9c",
                                padding: "1rem 2rem",
                                display: "block",
                                height: "5rem",
                                cursor: "pointer",
                            }}
                            onClick={() => window.location.href="/booking" }
                        >
                            Book Now
                        </button>
                    </div>  
                </div>
            </footer>
        </div>
    );
}

export default Services;