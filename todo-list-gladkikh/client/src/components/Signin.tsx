import React, { useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const theme = createTheme();

function SignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { store } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
              sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Авторизация
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                       onChange={ e => setEmail(e.target.value) }
                      value={ email }
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                  />
                  <TextField
                   onChange={ e => setPassword(e.target.value) }
                      value={ password }
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Пароль"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                  />
                  <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={ () => store.login(email, password) }
                  >
                  Войти
                  </Button>
                  <Button
                      fullWidth
                      variant="outlined"
                      sx={{ mt: 1, mb: 2 }}
                      onClick={ () => store.setSignIn() }
                  >
                   Нет аккаунта? Зарегистрироваться
                  </Button>
              </Box>
          </Box>
        </Container>
    </ThemeProvider>
  );
}

export default observer(SignIn)