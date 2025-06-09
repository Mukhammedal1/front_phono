import React, { useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";

function Auth() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        borderRadius: "10px",
        padding: "30px",
        margin: "130px auto",
        maxWidth: "400px",
      }}
    >
      <main>
        {showRegister ? (
          <>
            <Register />
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Already have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegister(false);
                }}
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Sign In
              </a>
            </p>
          </>
        ) : (
          <>
            <SignIn />
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Don't have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegister(true);
                }}
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Register
              </a>
            </p>
          </>
        )}
      </main>
    </div>
  );
}

export default Auth;
