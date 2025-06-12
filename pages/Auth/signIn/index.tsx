import React from 'react'
import SignIn from '../../../app/Auth/SignIn';

function SignInPage() {
  return (
    <div>
        <SignIn switchToRegister={function (): void {
              throw new Error('Function not implemented.');
          } } />
    </div>
  )
}

export default SignInPage;