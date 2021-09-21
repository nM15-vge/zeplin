import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContentProvider from './Context/ContentContext';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  return (
    <ContentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContentProvider>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
