import React from 'react';
import 'materialize-css';
import { useRoutes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/auth.context';
import { Navbar } from './components/Navbar';
import { socket } from './socket-connection';

function App() {
  const {token, userId, login, logout} = useAuth(); 
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated, userId);

  const connectionIO = socket;
  return (
    <AuthContext.Provider value ={{
      token, userId, login, logout, isAuthenticated
    }}>
      <Router>
        {isAuthenticated && <Navbar userId={userId}/>}
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
