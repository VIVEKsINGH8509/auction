import {useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Signin from './pages/Signin';
import Explore from './pages/Explore';
import Home from './pages/Home'
import Footer from './components/Footer';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <>
      <Routes >
        
        <Route path="/login" element={<Signin />} />

        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore /> } />
          <Route path="addProduct" element={<AddProduct /> } />
        </Route>
      </Routes>
      
      </>
  );
}

export default App;
