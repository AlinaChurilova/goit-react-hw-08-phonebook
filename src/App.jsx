import React, { lazy, Suspense }from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/authOperations';
import PrivateRoute from './components/PrivateRoute';
import PablicRoute from './components/PablicRoute';
import authSelectors from './redux/auth/authSelectors';
import AppBar from 'components/AppBar';
import './index.css';

const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));

export default function App() {

  const isRefreshing = useSelector(authSelectors.getIsFetchingCurrent);

  const dispatch = useDispatch();

   useEffect(() => {
        dispatch(authOperations.fetchCurrentUser())
    }, [dispatch]);


  return ( 
    !isRefreshing && (
      <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route exact path="/" element={<PrivateRoute />} />  
          <Route  path="/contacts" element={<PrivateRoute />} /> 
          <Route path="/login" element={
            <PablicRoute restricted>
              <LoginView/>
            </PablicRoute>
          } />

          <Route path="/register" element={
            <PablicRoute restricted>
              <RegisterView/>
            </PablicRoute>
          } />
        </Routes>
      </Suspense>
    </>
    )
    )
}