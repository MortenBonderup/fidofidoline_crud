import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import MineTider from './pages/MineTider'
import Opretbestilling from './pages/Opretbestilling'
import Opdaterbestilling from './pages/Opdaterbestilling'
import Sletbestilling from './pages/Sletbestilling'

function App() {

  return (
    <main className="root">
      <Navigation />
      <Routes>
        <Route path="/" element={<MineTider />} />
        <Route path="/tidsbestilling" element={<Opretbestilling />} />
        <Route path="/sletbestilling/:bestillingsId" element={<Sletbestilling />} />
        <Route path="/bestilling/:bestillingsId" element={<Opdaterbestilling /> } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default App;
