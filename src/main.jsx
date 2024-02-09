import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContexuserPro } from './context/context-user/contex-user-pro.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContexuserPro>
    <App />
  </ContexuserPro>,
)
