import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { Context } from '../index';

function LoginForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { store } = useContext(Context);

  return (
    <div>
        <input
            onChange={ e => setEmail(e.target.value) }
            value={ email }
            type="text"
            placeholder='Email'
        />
         <input
            onChange={ e => setPassword(e.target.value) }
            value={ password }
            type="text"
            placeholder='Password'
        />
        <button onClick={ () => store.login(email, password) }>Login</button>
        <button onClick={ () => store.registarion(email, password) }>Registration</button>
    </div>
  )
}

export default observer(LoginForm)
