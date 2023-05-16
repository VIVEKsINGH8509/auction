import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Signin from './pages/Signin';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
      
      </>
  );
}

export default App;
