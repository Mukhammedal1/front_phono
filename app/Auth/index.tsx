import React, { useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div style={{ marginTop: "50px" }}>
      {isSignIn ? (
        <SignIn switchToRegister={() => setIsSignIn(false)} />
      ) : (
        <Register switchToSignIn={() => setIsSignIn(true)} />
      )}
    </div>
  );
}

export default Auth;
