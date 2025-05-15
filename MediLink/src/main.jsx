import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './Context/AppContext.jsx'
createRoot(document.getElementById('root')).render(

<BrowserRouter>
<AppContextProvider>
<App/>
</AppContextProvider>

</BrowserRouter>
)
