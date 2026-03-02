import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import ShopContextProvider from './context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
=======

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
>>>>>>> ec0606688d066a433361338bd2ba6d8a8a1557f5
  </BrowserRouter>,
)
