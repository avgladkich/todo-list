import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export {ThemeProvider}

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'auto',
  padding: '0 1em',
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
  width: '700px',
  marginTop: 10,
}));

export const darkTheme = createTheme({ palette: { mode: 'dark' } });
export const lightTheme = createTheme({ palette: { mode: 'light' } });
