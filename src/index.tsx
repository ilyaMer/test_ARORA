import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';
import './index.css'
import * as ReactDOM from 'react-dom';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);