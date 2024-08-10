import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

 
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
