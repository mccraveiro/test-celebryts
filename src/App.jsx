import React from 'react';
import Pagination from './components/Pagination';

const setPage = page => console.log(page);

function App() {
  return (
    <Pagination current={7} total={20} setPage={setPage} />
  );
}

export default App;
