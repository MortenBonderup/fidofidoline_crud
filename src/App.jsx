import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import MineTider from './pages/MineTider'
import Tidsbestillingsside from './pages/Tidsbestillingsside'

function App() {

  return (
    <main className="root">
      <Navigation />
      <Routes>
        <Route path="/" element={<MineTider />} />
        <Route path="/tidsbestilling" element={<Tidsbestillingsside />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default App;
