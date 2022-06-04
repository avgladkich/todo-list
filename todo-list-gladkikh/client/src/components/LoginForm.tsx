import React, { useContext } from 'react'

import { Context } from '../index';
import SignIn from './Signin';
import Signup from './Signup';
import { observer } from 'mobx-react-lite';


function LoginForm() {
    const { store } = useContext(Context);

  return (
    <div>
      { store.isSignIn && <SignIn/> }
      { !store.isSignIn && <Signup/> }
    </div>
  )
}

export default observer(LoginForm)
