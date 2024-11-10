import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {Provider} from "react-redux"
import axios from 'axios';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "https://movie-booking-app-backend-etzh.onrender.com";
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);