import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import JSX from './Components.jsx'
import App from './App.jsx'
import Butter from './Butter.jsx'
import Palak from './Palak.jsx'
import "./App.css";*/
//import JSX from './Count.jsx'
//import Forms from './Forms.jsx'
//import Events from './Events.jsx'
//import Light from './Light.jsx'
import API from './Api.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <API/>
  </StrictMode>,
)
