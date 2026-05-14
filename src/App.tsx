import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import './App.css'

type Page = 'login' | 'signup'

function App() {
  const [page, setPage] = useState<Page>('login')

  return page === 'login' ? (
    <Login onSwitchToSignup={() => setPage('signup')} />
  ) : (
    <Signup onSwitchToLogin={() => setPage('login')} />
  )
}

export default App