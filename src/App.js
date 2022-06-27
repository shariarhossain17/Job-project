import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../src/Components/Shared/Header';
import './App.css';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';

function App() {
  return (
    <div className="">
      <ToastContainer></ToastContainer>
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/signup'element={<Register></Register>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
