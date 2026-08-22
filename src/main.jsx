import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '../context/auth.context.jsx'
import FamillyProvider from '../context/familly.context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
     <AuthProvider>
       <FamillyProvider>
        <App />
       </FamillyProvider>
     </AuthProvider>    
   </BrowserRouter>
  </StrictMode>,
)
