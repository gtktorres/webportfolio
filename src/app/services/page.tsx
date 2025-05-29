"use client";
import React from 'react';
import Image from 'next/image';

import Deskspace from '../../components/Project-Images/deskspace.png';

const Services = () => {
    return(
        
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
        
    );
}

export default Services;