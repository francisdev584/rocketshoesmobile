import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import ToastContainer from '@rimiti/react-native-toastify';
import './config/ReactotronConfig';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Routes />
      <ToastContainer autoclose={3000} />
    </Provider>
  );
}

export default App;
