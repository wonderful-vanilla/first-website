import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Importing react-bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './contexts/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));//create root method from dom package..selectiong html element with id of root...
root.render(
  <React.StrictMode> //additional checks and warnings for the application
    <GlobalProvider>//provides global state to all child components using the React Context API.
      <BrowserRouter>//enables client-side routing and navigation for the application
        <App />
      </BrowserRouter>
    </GlobalProvider>

  </React.StrictMode>
);


