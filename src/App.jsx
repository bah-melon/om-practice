import './design/Global.scss'
import {Route ,Routes} from 'react-router-dom'
import Whitepaper from './pages/Whitepapers/Whitepaper'
import Contact from './pages/Contact/Contact'
import WorkAt from './pages/WorkAt/WorkAt'
import OverOns from './pages/OverOns/OverOns'
import AanDeSlag from './pages/AanDeSlag/AanDeSlag'
import Vacancies from './pages/Vacancies/Vacancies'

function App() {

  return (
    <div>
      <Routes>
        <Route path = "/workat" element={<WorkAt/>}/>
        <Route path = "/whitepaper" element={<Whitepaper/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/over-ons" element={<OverOns/>}/>
        <Route path="/aan-de-slag" element={<AanDeSlag/>}/>
        <Route path="/vacancies" element={<Vacancies/>}/>
      </Routes>
    </div>
  )
}

export default App
