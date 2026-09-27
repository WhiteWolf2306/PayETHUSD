import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Send from './components/Send/Send.jsx'
import Transactions from './components/Transactions/Transactions.jsx'
import Contact from './components/Contact/Contact.jsx'
import Price from './components/Price/Price.jsx'
const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [{
       path : "",
       element : <Home/>
    },
  {
    path : '/Send',
    element : <Send/>
  },
  {
    path:'/Price',
    element : <Price/>
  }, 
  {
    path : '/Transactions',
    element : <Transactions/>
  },
  {
       path : '/Contact',
       element : <Contact/>
  }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
