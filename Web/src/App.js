import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/css/global.min.css';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={5000} position="bottom-right"/>
    </>
  );
}