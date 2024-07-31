import './design/Global.scss'
import {Route ,Routes} from 'react-router-dom'
import Whitepaper from './pages/Whitepapers/Whitepaper'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <div>
      <Routes>
        <Route path = "/whitepaper" element={<Whitepaper/>}/>
        <Route path = "/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
