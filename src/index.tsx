import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';
import './index.css'


const root = createRoot(document.getElementById('app'));


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);