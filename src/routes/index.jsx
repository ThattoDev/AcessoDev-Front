import { Route, BrowserRouter, Routes, Navigate, Outlet } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

export const PrivateRoutes = () => {
  function isAuthenticated() {

    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      return false;
    }
  }

  return (
    isAuthenticated() ? <Outlet /> : <Navigate to="/" />
  );
};

export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}