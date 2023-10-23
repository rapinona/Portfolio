import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#ff014f',
      darker: '#620043',
    },
    neutral: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
    transparent:{
      main:"transparent"
    }
  },
});
export default Theme