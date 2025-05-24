"use client"; // this is a client component 👈🏽
import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import Laptop from "../../components/Project-Images/laptop image contact.png";

  export default function Contact() {
    
    const [isOpen, setIsOpen] = useState(false);

      const customStyles = { overlay: { 
        backgroundColor: 'rgba(0, 0, 0, 0.6)' },
        content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)' 
      } };

      const [modalShow, setModalShow] = React.useState(false);
      const formRef = React.useRef<HTMLFormElement>(null);
      return (
        <div className="ContactPage" style={{ display: "grid", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className='container'>
            <form
              ref={formRef}
              onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                  firstName: { value: string };
                  lastName: { value: string };
                  email: { value: string };
                  message: { value: string };
                };
                const firstName = target.firstName.value;
                const lastName = target.lastName.value;
                const email = target.email.value;
                const message = target.message.value;
                console.log(firstName, lastName, email, message);
                // Handle form submission logic here
              }
              }
            >

              <div className="Contact">
                <div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Contact Us</h2>
                  <br />
                  <p>If you’re interested in collaborating, please provide your information, and we will contact you soon. We look forward to connecting with you.</p>
                  <br />
                  <br />
                  <p 
                    style={{ textDecoration: "underline"}}
                  >
                    gtktorres@gmail.com
                  </p>
                  <p>7205390819</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>Name (required)</p>
                  <br />
                </div>
                <div style={{ display: 'grid', maxWidth: "100%", gridTemplateColumns: '1fr 1fr', gridGap: '5rem'}}>
                  <div>
                      <label
                        style={{ 
                          textAlign: "left",
                          fontSize: "2em",
                          color: "black",
                          borderRadius: "5em",
                          marginLeft: "5rem",
                          borderWidth: "1px",
                        }}
                      >
                        First Name
                      <input
                        type="firstName"
                        name="firstName"
                        style={{ marginLeft: "5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "85%", height: "4rem",  marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)", paddingRight: ".25rem" }}
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
                          borderWidth: "1px" 
                        }}
                      >
                        Last Name
                      <input
                        type="lastName"
                        name="lastName"
                        style={{  marginRight: "5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "85%", height: "4rem", marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)" }}
                      />
                      </label>
                  </div>
                </div>
                <div>
                    <label 
                      style={{ 
                        textAlign: "left",
                        fontSize: "2em",
                        color: "black",
                        borderRadius: "5em",
                        marginLeft: "5rem",
                        borderWidth: "1px" 
                      }}
                    >
                      Email (required)
                    <input
                      type="email"
                      name="email"
                      border-radius="25px"
                      style={{ marginLeft: "5rem",  fontSize: "2rem", borderRadius: "25px", display: "block", width: "50%", height: "4rem", background: "hsla(240, 11%, 93%, 0.902)"  }}
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
                        marginLeft: "5rem",
                        borderWidth: "1px" 
                      }}
                    >
                      Message (required)
                    <input
                      type="message"
                      name="message"
                      style={{    marginRight: "5rem", marginLeft: "5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "85%", height: "10rem", marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)" }}
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
                  <button
                    type="submit"
                    style={{ 
                      fontSize: "1.5em",
                      fontWeight: "100",
                      textAlign: "center",
                      color: "hsla(0,0%,100%,1)",
                      borderRadius: "5em",
                      marginLeft: "5rem",
                      marginBottom: "1rem",
                      borderWidth: "1px",
                      backgroundColor: "hsla(0,0%,0%,1)",
                      padding: "1rem 2rem",
                      display: "block",
                      width: "25%",
                      height: "5rem",
                      cursor: "pointer"
                    }}
                  >
                    SEND
                  </button>
                  </label>
                </div>
              </div>

              {/* <div className="Border ">
                <h4>Email</h4>
                <p>gtktorres@gmail.com</p>
                <h4>Mobile</h4>
                <p>7205390819</p>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/guevara-torres</p>
                <h4>GitHub</h4>
                <p>https://github.com/gtktorres</p>
              </div> */}

              {/* <Button className="Button3"
                  variant="primary" 
                  onClick={() => setIsOpen(false)}>
                  Close
                </Button>
              </Modal> */}
            </form>
            <Image
              src={Laptop}
              alt="Laptop Image"
              width={500}
              height={500}
              style={{ position: "sticky", width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      );
  }
  
