import React, { lazy, Suspense }from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  authOperations  from './redux/auth/authOperations';
// import AppBar from 'components/AppBar';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import RegisterView from 'views/RegisterView';
// import LoginView from 'views/LoginView';
import AppBar from 'components/AppBar';
import './index.css';

const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

export default function App() {

  const dispatch = useDispatch();

   useEffect(() => {
        dispatch(authOperations.fetchCurrentUser())
    }, [dispatch]);


  return ( 
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path="/movies/:movieId" element={<MovieDetails />}> */}
                <Route path="/register" element={<RegisterView/>} />
                <Route path="/login" element={<LoginView/>} />
                <Route path="/contacts" element={<ContactsView/>}/>
            </Routes>
      </Suspense>
    </>
    )
}