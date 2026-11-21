import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Location from './pages/Location';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/location" element={<Location />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
