import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './Global/styles';
import Routes from './routes';

function App() {
  return (
    <div>
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
      <Routes />
    </div>
  );
}

export default App;
