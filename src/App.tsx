import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Therapists } from './pages/Therapists'
import { Resources } from './pages/Resources'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import ErrorBoundary from './components/layout/ErrorBoundary'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/therapists" element={<Therapists />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </Provider>
  )
}

export default App
