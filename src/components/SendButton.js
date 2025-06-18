"use client"; // this is a client component 👈🏽
import "../styles/globals.css";

export default function SendButton({ onClick }) {
  return (
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
    );
}