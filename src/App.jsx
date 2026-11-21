import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { NewsPage, TemplatePage } from './pages/ContentPage';
import Maintenance from './pages/Maintenance';
import useMaintenance from './hooks/useMaintenance';

export default function App() {
  const maintenance = useMaintenance();

  // Plain background while the maintenance status loads, so the site
  // doesn't flash before the maintenance page appears.
  if (maintenance.loading) return <div className="loading-screen" />;
  if (maintenance.enabled) return <Maintenance content={maintenance.content} />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:newsid" element={<NewsPage />} />
        <Route path="/:templateid" element={<TemplatePage />} />
      </Routes>
    </Layout>
  );
}
