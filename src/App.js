import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blog from "./Components/Pages/Blog";
import Details from "./Components/Pages/Details";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Shipping from "./Components/Pages/Shipping";
import NotFound from "./Components/Shared/NotFound";
import RequireAuth from "./Components/Shared/Requireauth";

function App() {
  return (
    <div className="">
      <ToastContainer></ToastContainer>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog></Blog>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route
          path="/adriano-product/:id"
          element={<Details></Details>}
        ></Route>
        <Route path="/shipping" element={<Shipping></Shipping>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
