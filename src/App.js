
import './App.css';
import Header from './compontents/Header';
import MainContent from './compontents/MainContent';
import Login from './compontents/Login';
import { useLocalState } from './compontents/utils/useLocalState';
import { Route, Routes} from 'react-router-dom';
import Dashboard from './compontents/Dashboards';
import PrivateRoute from './compontents/PrivateRoute';


function App() {

  const [jwt, setJwt] = useLocalState("", "jwt");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute>
          <Dashboard data= {jwt} /></PrivateRoute>
          } />
        <Route path="/assignments/:id" element={<PrivateRoute>
          <Dashboard data= {jwt} /></PrivateRoute>
          } />
        <Route path="/" element={<MainContent/>} />
      </Routes>
    </div>
  );
}

export default App;
