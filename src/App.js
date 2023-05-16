import {useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Signin from './pages/Signin';
import Explore from './pages/Explore';
import Home from './pages/Home';
import { UserContext } from './contexts/userContext';

function App() {
  const [{currentUser}] = useContext(UserContext)
  return (
      <Routes >
        
        <Route path="/login" element={<Signin />} />

        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore /> } />
        </Route>
      </Routes>
  );
}

export default App;
