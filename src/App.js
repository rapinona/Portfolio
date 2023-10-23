import Portfolio from './views/Portfolio';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './theme'
import { Provider } from "react-redux";
import ConfigureStore from "./store/index";

let store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Portfolio></Portfolio>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
