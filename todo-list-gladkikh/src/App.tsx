import { useContext, useEffect } from 'react';
import { Context } from '.';
import './App.css';
import LoginForm from './components/LoginForm';
import { observer } from 'mobx-react-lite'


function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading){
    return (
      <div>...Loading</div>
    )
  }

  if (!store.isAuth) {
    return (
      <LoginForm />
    )
  }

  return (
    <div>
      <h1>{ store.isAuth?  `User is authorized ${ store.user.email }` :  'Authorization' }</h1>
      <h1>{ store.user.isActivated ? 'account verified' : 'verify your account' }</h1>
      <button onClick={ () => store.logout() }>Logout</button>
    </div>
  );
}

export default observer(App);
