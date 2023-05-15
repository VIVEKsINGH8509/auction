import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
      <Footer/>
      
      </>
  );
}

export default App;
