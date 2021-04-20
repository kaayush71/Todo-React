import React, { useRef, useState } from 'react';
import './login.scss';
import CustomButton from '../../components/customButton/customButton';
import Form from '../../components/formField/formField';
import { useAuth } from '../../context/authContext';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../config/firebase';
// import { signInWithGoogle } from '../../config/firebase';

const Login = () => {
  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase.auth().signInWithPopup(provider);
      history.push('/');
    } catch {
      alert('Google Sign in failed');
    }
    // .then((result) => {
    //   var credential = result.credential;

    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   console.log(user);
    //   // ...
    // });
    // .catch((error) => {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to Sign In');
    }
  }
  currentUser && console.log(currentUser);
  return (
    <div className="container-fluid login__container">
      <div className="container container__body">
        <div className="split">
          <div className="split__left">
            <img
              className="split__left__img img-fluid"
              src="https://elements-cover-images-0.imgix.net/6e855666-1764-4019-be9e-998505bd3fdf?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=fffbff5628fab9da0e2697d748790e92"
              alt="person"
            ></img>
            <h3 className="split__left__text">
              Don't have an account <Link to="/signup">Sign Up</Link>
            </h3>
          </div>
          <div className="split__right">
            <div className="split__right__wrapper">
              <h2
                className={
                  error ? 'split__right__text_error' : 'split__right__text'
                }
                // className="split__right__text"
              >
                Sign In
                {/* {currentUser && currentUser.email} */}
              </h2>
              {error && (
                <div class="alert alert-danger" role="alert">
                  Failed to Login
                </div>
              )}
              <form
                style={{ marginTop: 60 }}
                onSubmit={handleSubmit}
                className="split__right__signup"
              >
                <Form
                  type="email"
                  label="email"
                  placeholder="Enter email"
                  forwardRef={emailRef}
                  required
                ></Form>
                <Form
                  type="password"
                  label="password"
                  placeholder="Enter Password"
                  forwardRef={passwordRef}
                  required
                ></Form>
                <CustomButton btn="btn-primary">Sign In</CustomButton>
              </form>
              <h3 className="split__right__other">OR</h3>
              <i onClick={signInWithGoogle} class="fab fa-google-plus-g"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
