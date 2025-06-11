import React, { useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";

function Auth() {
  const [isRegister, setIsSignIn] = useState(true);

  return (
    <div style={{ marginTop: "50px" }}>
      {isRegister ? (
        <Register switchToSignIn={() => setIsSignIn(false)} />
      ) : (
        <SignIn switchToRegister={() => setIsSignIn(true)} />
      ) }
    </div>
  );
}

export default Auth;

