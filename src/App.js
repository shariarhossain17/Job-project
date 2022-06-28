import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../src/Components/Shared/Header';
import './App.css';
import Blog from './Components/Pages/Blog';
import Details from './Components/Pages/Details';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import NotFound from './Components/Shared/NotFound';

function App() {
  return (
    <div className="">
      <ToastContainer></ToastContainer>
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/signup'element={<Register></Register>}></Route>
      <Route path='/adriano-product/:id' element={<Details></Details>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
