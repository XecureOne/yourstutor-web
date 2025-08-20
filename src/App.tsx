import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Index } from './pages/Index'

function App() {

  return (
    <div className='scroll-smooth'>
      <BrowserRouter basename="/yourstutor">
              <Routes>
                <Route path='/' element={<Index/>}></Route>
              </Routes>
      </BrowserRouter>
    </div>
   
  )
}

export default App
