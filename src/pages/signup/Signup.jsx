import React, { useRef, useState } from 'react';
import './signup.scss';
import CustomButton from '../../components/customButton/customButton';
import Form from '../../components/formField/formField';
import { useAuth } from '../../context/authContext';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords does not match');
    }
    try {
      setError('');
      await signup(emailRef.current.value, passwordRef.current.value);
      const user = auth.currentUser;
      user.updateProfile({
        displayName: nameRef,
      });
      history.push('/');
    } catch {
      setError('Failed to create an account');
    }
  }

  return (
    <div className="container-fluid login__container">
      <div className="container container__body">
        <div className="split">
          <div className="split__left">
            <img
              className="split__left__img img-fluid"
              src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              alt="person"
            ></img>
            <h3 className="split__left__text">
              Already have an account ? <Link to="/login">Sign In</Link>
            </h3>
          </div>
          <div className="split__right">
            <div className="split__right__wrapper">
              <h2
                className={
                  error ? 'split__right__text_error' : 'split__right__text'
                }
              >
                Sign Up
                {/* {currentUser && currentUser.email} */}
              </h2>
              {error && (
                <div class="alert alert-danger" role="alert">
                  Passwords does not match
                </div>
              )}
              <form onSubmit={handleSubmit} className="split__right__signup">
                <Form
                  type="text"
                  label="email"
                  placeholder="Enter Username"
                  forwardRef={nameRef}
                  required
                ></Form>
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
                <Form
                  type="password"
                  label="password"
                  placeholder="Confirm Password"
                  forwardRef={passwordConfirmRef}
                  required
                ></Form>
                <CustomButton btn="btn-primary">Sign Up</CustomButton>
              </form>
              {/* <h3 className="split__right__other">OR</h3>
              <i class="fab fa-google-plus-g"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
