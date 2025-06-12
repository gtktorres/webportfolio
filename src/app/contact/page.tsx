"use client"; // this is a client component 👈🏽
import React from 'react';
import Image from "next/image";
import Laptop from "../../components/Project-Images/laptop image contact.png";
import sgMail from '@sendgrid/mail';

export default function Contact() {

    const sendgrid_api_key = process.env.SENDGRID; // Ensure you have this environment variable set up correctly
    
    sgMail.setApiKey(sendgrid_api_key || ''); // Set your SendGrid API key

    const formRef = React.useRef<HTMLFormElement>(null);
      return (
        <div className="ContactPage" style={{ display: "grid", flexDirection: "column", alignItems: "center", justifyContent: "center", background: 'hsla(240, 11%, 93%, 1)' }}>
          <div className='container-contact'>
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
                // Create a test account or replace with real credentials.
                const msg = {
                  to: 'test@example.com',
                  from: 'test@example.com', // Use the email address or domain you verified above
                  subject: 'Sending with Twilio SendGrid is Fun',
                  text: 'and easy to do anywhere, even with Node.js',
                  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                };
                //ES6

                sgMail
                  .send(msg)
                  .then(() => {}, error => {
                    console.error(error);

                    if (error.response) {
                      console.error(error.response.body)
                    }
                  });
                //ES8
                (async () => {
                  try {
                    await sgMail.send(msg);
                  } catch (error) {
                      console.error(error);

                      if (typeof error === 'object' && error !== null && 'response' in error && (error as any).response != null) {
                        console.error((error as any).response.body)
                      }
                  }
                })();
              }
              }
            >

              <div className="Contact">
                <div>
                  <h2 style={{fontSize: "4em"}}>Contact Us</h2>
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
                        style={{ color: "black", marginLeft: "5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "85%", height: "4rem",  marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)", paddingRight: ".25rem" }}
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
                        style={{  color: "black", marginRight: "5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "85%", height: "4rem", marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)" }}
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
                      style={{ color: "black", marginLeft: "5rem",  fontSize: "2rem", borderRadius: "25px", display: "block", width: "50%", height: "4rem", background: "hsla(240, 11%, 93%, 0.902)"  }}
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
                      style={{    color: "black", marginRight: "5rem", marginLeft: "5rem", fontSize: "2rem", borderRadius: "25px", display: "block", width: "85%", height: "10rem", marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)" }}
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
  
