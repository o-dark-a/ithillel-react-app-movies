import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import RoutesList from './routes/RoutesList';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app-wrap container">
          <RoutesList />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
