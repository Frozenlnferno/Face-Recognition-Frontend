import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SignInPage from './pages/sign-in/SignInPage.jsx'; 
import MainPage from './pages/main/MainPage.jsx'; 
import RegisterPage from './pages/register/RegisterPage.jsx'; 

import './App.css';

function App() {

  const getStoredUser = () => {
    const storedUser = localStorage.getItem('user');
    return (storedUser) ? JSON.parse(storedUser) : {
      id: '',
      name: '',
      email: '',
      entries: '',
      joined: ''
    }
  }

  const [user, setUser] = useState(getStoredUser);
    
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <Router basename="/Face-Recognition-Frontend">
      <Routes>
        <Route path='/' element={ <Navigate to='/signin'/> } />
        <Route path='/signin' element={ <SignInPage setUser={setUser} /> } />
        <Route path='/main' element={ <MainPage user={user} setUser={setUser} /> }/>
        <Route path='/register' element={ <RegisterPage setUser={setUser} /> }/>
      </Routes>
    </Router>
  )
}

export default App
