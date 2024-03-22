import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const theme = {
  colors: {
    black: "#101828",
    grey: "#475467",
    orange: "#E44848",
    yellow: "#FFC531",
    white: "#F2F4F7",
    whiteInputs: "#F7F7F7",
  },

  transition: "200ms cubic-bezier(0.4,0,0.2,1)",
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename='/campersStore'>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
