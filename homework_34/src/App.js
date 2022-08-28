import { useEffect, useState, useMemo } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CharactersPage from './pages/CharactersPage';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>&#x2728;Harry Potter Characters &#x2728;</h1>
        <CharactersPage />
      </div>
    </Provider>
  );
}

export default App;
