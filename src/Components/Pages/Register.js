import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/google.png";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import Title from "../Shared/Title";
const Register = () => {
  const [user,Loading] = useAuthState(auth);
  const [signInWithGoogle, userGoogle, loading1, error1] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, useremail, loadingemail, erroremail] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [information, setInformation] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    otherError: "",
  });

  const handleNameForm = (event) => {
    setInformation({ ...information, name: event.target.value });
  };
  const handleEmailForm = (event) => {
    const regex = /.+@[^@]+\.[^@]{2,}$/.test(event.target.value);
    if (regex) {
      setInformation({ ...information, email: event.target.value });
      setError({ ...error, email: "" });
    } else {
      setError({ ...error, email: "invalid email" });
      setInformation({ ...information, email: "" });
    }
  };

  const handlePassword = (event) => {
    const validPassword = /.{6,}/.test(event.target.value);
    if (validPassword) {
      setInformation({ ...information, password: event.target.value });
      setError({ ...error, password: "" });
    } else {
      setError({ ...error, password: "password minimum 6 character" });
      setInformation({ ...information, password: "" });
    }
  };

  const handleConfirmPass = (event) => {
    if (information.password === event.target.value) {
      setInformation({ ...information, confirmPass: event.target.value });
      setError({ ...error, confirmPass: "" });
    } else {
      setError({ ...error, confirmPass: "password don't match" });
      setInformation({ ...information, confirmPass: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (information.confirmPass) {
      createUserWithEmailAndPassword(information.email, information.password);
    }
  };

  useEffect(() => {
    if (erroremail) {
      switch (erroremail?.code) {
        case "auth/email-already-in-use":
          setError({ ...error, otherError: "email already use" });
      }
    }
  }, [erroremail]);

  if(Loading){
    <Spinner></Spinner>
  }

  //   redirect
  const navigate = useNavigate()
useEffect(()=>{
    if(user){
        navigate('/')
    }
},[user])
  return (
    <div>
      <div className="form-section mb-2">
        <Title title="signup"></Title>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto form-style shadow p-5 mt-5">
              <h1 className="text">Sign up</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    onChange={handleNameForm}
                    type="text"
                    placeholder="Enter name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleEmailForm}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                  <Form.Text className="text-danger">{error.email}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={handlePassword}
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <Form.Text className="text-danger">
                    {error.password}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    onChange={handleConfirmPass}
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                  <Form.Text className="text-danger">
                    {error.confirmPass}
                  </Form.Text>
                </Form.Group>

                <Form.Text className="text-danger">
                  {error.otherError}
                </Form.Text>
                <p onClick={handleSubmit}
                  className="regigter-btn w-100  mt-2"
                  variant="primary"
                  type="submit"
                >
                  SIGNUP
                </p>
              </Form>
              <p  style={{ fontWeight: "500" }} className=" mt-2 text-muted">
                Already have account?
                <Link
                 
                  className="text-decoration-none text"
                  to="/login"
                >
                  Log In
                </Link>{" "}
              </p>
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
    </div>
  );
};

export default Register;
