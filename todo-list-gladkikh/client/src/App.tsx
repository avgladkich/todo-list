import { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { observer } from 'mobx-react-lite'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from "@material-ui/core";

import { Context } from '.';
import LoginForm from './components/LoginForm';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './App.css';

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
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography  variant="subtitle1" color={ store.user.isActivated ? 'primary' : 'error' }>
          { store.user.isActivated ? 'Аккаунт подтвержден' : 'Аккаунт не подтвержден' }
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
         { `Добро пожаловать ${ store.user.email  }` }
        </Typography>
        <Button variant="outlined" size="small" onClick={ () => store.logout() }>
          <ExitToAppIcon/>
          Выйти из аккаунта
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      </Toolbar>
    </div>
  );
}

export default observer(App);
