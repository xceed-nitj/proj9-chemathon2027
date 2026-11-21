import { site, contact } from '../content';
import PulseWall from '../components/PulseWall';
import { pulse } from '../content';

// Adapted from xceed-nitj/Proj8-Ece-MAC2027 (src/pages/Maintenance.jsx):
// shown when maintenance is switched on in the AMS admin panel.
const MAINTENANCE_DEFAULTS = {
  name: site.name,
  subtitle: site.edition,
  message:
    'We are currently performing scheduled maintenance to bring you an improved experience. Please check back soon. Thank you for your patience.',
};

export default function Maintenance({ content = {} }) {
  const pick = (key) =>
    typeof content[key] === 'string' && content[key].trim() ? content[key].trim() : MAINTENANCE_DEFAULTS[key];

  return (
    <div className="page maintenance" style={{ '--accent': pulse.accent }}>
      <PulseWall />
      <div className="hero-card maintenance-card">
        <div className="hero-tile"><span>2027</span><strong>Ch</strong><span className="hero-tile-name">ChEMATHON</span></div>
        <p className="mono muted">{pick('subtitle')}</p>
        <h1>{pick('name')}</h1>
        <p className="lead">{pick('message')}</p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </div>
  );
}
