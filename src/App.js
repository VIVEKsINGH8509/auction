import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />} />
      </Routes>
      <Footer/>
      
      </>
  );
}

export default App;
