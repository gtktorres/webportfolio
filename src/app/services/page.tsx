"use client";
import React from 'react';
import Image from 'next/image';

import Deskspace from '../../components/Project-Images/deskspace.png';

const Services = () => {
    return(
        <div>
            <main>  
                <div className='container-services'>
                        
                            <div>
                                <div>
                                    <h2>Services Offered</h2>
                                </div>
                                <div>
                                    <p>
                                        Schedule your consultation with us today and experience personalized service tailored to your business software needs. Let our experts guide you in finding the optimal solutions to enhance your company&apos;s efficiency.
                                    </p>
                                <div>
                            </div>
                            <div>
                                <div>
                                    <Image 
                                        src={Deskspace}
                                        alt=''
                                    ></Image>
                                    <h2></h2>
                                    <p></p>
                                    <p></p>
                                    <button></button>
                                </div>
                                <div>
                                    <Image 
                                        src={Deskspace}
                                        alt=''
                                        ></Image>
                                    <h2></h2>
                                    <p></p>
                                    <p></p>
                                    <button></button>
                                </div>
                                <div>
                                    <Image 
                                        src={Deskspace}
                                        alt=''
                                    ></Image>
                                    <h2></h2>
                                    <p></p>
                                    <p></p>
                                    <button></button>
                                </div>
                            </div>
                            <div className='footer'>
                                <Image
                                    src={Deskspace}
                                    alt="Deskspace"
                                    width={500}
                                    height={500}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer style={{ position: "relative", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Deskspace.src}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>            
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
                                borderWidth: "1px",
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