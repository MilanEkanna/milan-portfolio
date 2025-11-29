
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import TargetCursor from './Components/TargetCursor.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <TargetCursor
      spinDuration={2}
      hideDefaultCursor={true}
      parallaxOn={true}
      cursorColor="#561C24"
      
    /> */}
    <App />
  </BrowserRouter>

)
