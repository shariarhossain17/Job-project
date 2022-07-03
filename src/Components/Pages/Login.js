import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../../assets/google.png';
import auth from "../../firebase.init";
import "../Css/Login.css";
import Spinner from "../Shared/Spinner";
import Title from "../Shared/Title";



const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, userGoogle, loading1, error1] =
    useSignInWithGoogle(auth);
    const [
      signInWithEmailAndPassword,
      useremail,
      loadingemail,
      erroremail,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, errorreset] = useSendPasswordResetEmail(
      auth
    );

  let navigate = useNavigate();
  let location = useLocation();


  const [information, setInformation] = useState({
    email: "",
    password: ""
  });
  const [inputError, setError] = useState({
    email: "",
    password: "",
  });
  
  const handleEmailForm = (event) => {
    const regex = /.+@[^@]+\.[^@]{2,}$/.test(event.target.value);
    if(regex){
      setInformation({...information,email:event.target.value})
      setError({...inputError,email:""})
    }
    else{
      setError({...inputError,email:"invalid email"})
      setInformation({...information,email:""})
    }
  };
  
  const handlePassword = event =>{
    setInformation({...information,password:event.target.value})
  }
 

 const handleSignIn = event =>{
   event.preventDefault()
   signInWithEmailAndPassword(information.email,information.password)
   console.log("hello");
 }


 const handleResetPass = async() =>{
    if(information.email){
      await sendPasswordResetEmail(information.email)
      toast.success("Email sent")
    }
    else{
      toast.error("plz provide your email")
    }
 }


 

  useEffect(()=>{
   if(erroremail){
    switch(erroremail?.code){
      case"auth/wrong-password":
      setError({...inputError,password:"wrong password"})
     }
   }
  },[erroremail])
  useEffect(()=>{
   if(erroremail){
    switch(erroremail?.code){
      case"auth/user-not-found":
      setError({...inputError,email:"invalid email"})
     }
   }
  },[erroremail])

  if (loading) {
    <Spinner></Spinner>
  }
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user])
  return (
    <div className="form-section">
        <Title title="login"></Title>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto form-style shadow p-5 mt-5 rounded">
          <h2 className="text mb-3">Account Login</h2>
            <Form  onSubmit={handleSignIn} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleEmailForm} type="email" placeholder="Enter email" required />
                <Form.Text className="text-danger">
                 {inputError.email}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                <Form.Text className="text-danger">
                 {inputError.password}
                </Form.Text>
              </Form.Group>
              <a onClick={handleResetPass} className="btn btn-link text-decoration-none  password-btn mb-1">Forgot Password?</a>
              <p onClick={handleSignIn} className="regigter-btn w-100" variant="primary" type="submit">
                LOGIN
              </p>
            </Form>
            <p style={{fontWeight:"500"}} className="mt-2 text-muted">you are new?<Link  className="text-decoration-none text" to='/signup'>signup</Link> </p>
            <div className="d-flex justify-center align-items-center mt-2">
              <div
                className="w-50"
                style={{ border: "1px solid #6c757d", height: "1px" }}
              ></div>
              <p className="mt-2 mx-2">or</p>
              <div
                className="w-50"
                style={{ border: "1px solid #6c757d", height: "1px" }}
              ></div>
            </div>

            <div
              onClick={() => signInWithGoogle()}
              className="d-flex align-items-center google-login-btn"
            >
              <img width={30} src={logo} alt="" />
              <span className="ms-5">continue with google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login