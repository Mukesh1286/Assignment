import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
     
          <Routes>
            <Route path='/Dashboard' element={<Dashboard />} />
           
            <Route path='/' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
