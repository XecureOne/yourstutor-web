import './App.css'
import { Routes,Route, HashRouter } from 'react-router-dom'
import { Index } from './pages/Index'

function App() {

  return (
    <div className='scroll-smooth'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
        </Routes>
    </HashRouter>
    </div>
   
  )
}

export default App
