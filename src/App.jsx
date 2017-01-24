import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Pagination from './components/Pagination';

function App() {
  return (
    <Provider store={store}>
      <Pagination total={20} />
    </Provider>
  );
}

export default App;
