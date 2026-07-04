import React from 'react';
import Image from "next/image";
import ContactForm from '../../components/ContactForm';

export default function Contact() {
    
      return (
        <div className="ContactPage" style={{ display: "grid", flexDirection: "column", alignItems: "left", justifyContent: "center", background: 'hsla(240, 11%, 93%, 1)' }}>
          <div className='container-contact'>
            <ContactForm />
            <Image
              src="../../public/Project-Images/laptop-image-contact.png"
              alt="Laptop Image"
              width={500}
              height={500}
              style={{ width: "100%", height: "100%", objectFit: "cover"}}
            />
          </div>
        </div>
      );
  }
  
