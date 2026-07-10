import React from 'react';
import Image from 'next/image';
import BookNow from '../../components/BookNow.js';
import FooterButton from '../../components/FooterButton.js';

const Services = () => {
    return(
        <div style={{ background: 'hsla(240, 11%, 93%, 1)' }}>
            <header>
                   <div className='container-services-header'>
                    <div className='left'>
                        <h2 style={{whiteSpace: "nowrap", fontSize: "clamp(1.8rem, calc(7vw + 1rem), 3.5rem)"}}>Services Provided</h2>
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
                            src='../../public/Project-Images/soft-corner-keyboard.png'
                            alt='Black Keyboard on a Desk'
                            width="300" height="200"
                        ></Image>
                        <h2 style={{ marginTop: "2rem"}}>Frontend Website</h2>
                        <p style={{ marginTop: "2rem"}}>$499</p>
                        <p style={{ marginTop: "2rem"}}>In 7 business days, a fully functional web application with the appropriate client-curated requirements.</p>
                        <BookNow />
                        </div>
                        
                        <div className='grid-item' style={{ marginLeft: "1rem", marginRight: "1rem"}}>
                        <Image 
                            src='../../public/Project-Images/macbook.png'
                            alt='Macbook on a Desk'
                            width="300" height="200"
                        ></Image>
                        <h2 style={{ marginTop: "2rem", marginLeft: "0.5rem"}}>Frontend Website with Authentication + RESTful APIs</h2>
                        <p style={{ marginTop: "2rem", marginLeft: "0.5rem"}}>$1149</p>
                        <p style={{ marginTop: "2rem", marginLeft: "0.5rem"}}>In 14 business days, a fully functional web application with the appropriate client-curated requirements. Including a backend that provides CRUD APIs, authentication, and authorization.</p>
                        <BookNow />
                        </div>

                            <div className='grid-item' style={{ marginRight: "5rem", justifySelf: "end"}}>
                                <Image 
                                    src='../../public/Project-Images/macbooks.png'
                                    alt='Macbooks on a Desk'
                                    width="300" height="200"
                                ></Image>
                                <h2 style={{ marginTop: "2rem"}}>Frontend Website with Auth + RESTful APIs + Validations + Third party APIs integration + DB design</h2>
                                <p style={{ marginTop: "2rem"}}>$1854</p>
                                <p style={{ marginTop: "2rem"}}>In 30 business days, a fully functional web application with the appropriate client-curated requirements. Providing a backend with CRUD APIs, Authentication, and Authorization. Including Database design, API Validation, and 3rd Party API Integration.</p>
                                <BookNow /> 
                            </div>                      
                        </div>
                    
                                                                                   
            </main>
            <footer style={{ position: "relative", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(''../../public/Project-Images/deskspace.png'')`, backgroundRepeat: "no-repeat", backgroundSize: "100%", maxHeight: "100%", maxWidth: "100%", height: "100vh" }}>            
                <div className="center" >
                    <h2 style={{ color: "white", width: "100%", whiteSpace: "nowrap", fontSize: "clamp(1.8rem, calc(7vw + 1rem), 4rem)"}}>Schedule a complimentary consultation</h2>
                    <div style={{ fontSize: "clamp(0.5rem, calc(7vw + 1rem), 1rem)", fontWeight: "100", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <FooterButton />
                    </div>  
                </div>
            </footer>
        </div>
    );
}

export default Services;
