import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css';
import App from './App';
import './pages/ApplyPage.css';

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
   document.getElementById('root')
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.Fragment>
//     <App />
//   </React.Fragment>
// );

