import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <div className='bg-gray-100 p-10 w-full h-screen'>
      <BrowserRouter>
        <div className=''>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/post/:id' element={<Post />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
