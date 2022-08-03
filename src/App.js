import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

import { AuthProvider } from './contexts/AuthContext';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <PrivateRoute >
              <Home />
            </PrivateRoute>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
