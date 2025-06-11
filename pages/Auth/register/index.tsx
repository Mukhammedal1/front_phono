import React from 'react'
import Register from '../../../app/Auth/Register';

function RegisterPage() {
  return (
    <div>
        <Register switchToSignIn={function (): void {
              throw new Error('Function not implemented.');
          } } />
    </div>
  )
}

export default RegisterPage;