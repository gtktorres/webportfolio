"use client"; // this is a client component 👈🏽
import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import Portrait1 from '../../components/Project-Images/portrait1.jpg'

  export default function Contact() {
    
    const [isOpen, setIsOpen] = useState(false);

      const customStyles = { overlay: { 
        backgroundColor: 'rgba(0, 0, 0, 0.6)' },
        content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)' 
      } };

      const [modalShow, setModalShow] = React.useState(false);
    
      return (
        <>
          {/* <Button className="Button3"
                    style={{ height: "5rem", width: "18rem", margin: "1rem" }}variant="primary" 
                    onClick={() => setIsOpen(true)}>Contact</Button> */}

          {/* <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(true)} style={customStyles}> */}

          <div>
            <Image
              height={500}
              width={370}
              src={Portrait1}
              className="App-port"
              alt="Portrait"
            />
          </div>

          <div className="Border ">
            <h4>Email</h4>
            <p>gtktorres@gmail.com</p>
            <h4>Mobile</h4>
            <p>7205390412</p>
            <h4>LinkedIn</h4>
            <p>linkedin.com/in/guevara-torres</p>
          </div>

          {/* <Button className="Button3"
              variant="primary" 
              onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </Modal> */}
        </>
      );
  }
  