import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useState} from 'react'
import Auth from './pages/Auth';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  
  const [burger, setBurger] = useState(false)

  return (
    <div className='bg-gray-100 p-2'>
      <BrowserRouter>
        <div className=''>
          <NavBar burger={burger} setBurger={setBurger} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth setBurger={setBurger}/>} />
            <Route path='/post/:id' element={<Post />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
