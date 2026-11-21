import { useEffect } from 'react';
import Section from '../components/Section';
import useConfData from '../hooks/useConfData';
import { site } from '../content';

// Location page, following the MAC2027 site (src/pages/Location.jsx):
//   "How to Reach NIT Jalandhar"  ← GET conferencemodule/location/:confId   (HTML written in AMS)
//   "Nearby Attractions"          ← GET conferencemodule/images/conference/:confId  [{ name, imgLink }]
// plus the NIT Jalandhar map that MAC2027 has prepared (commented out there).
const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.1377287966196!2d75.53326491497945!3d31.39686998141244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xee7a6c0cae52768!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1679911376371!5m2!1sen!2sin';

export default function Location() {
  useEffect(() => window.scrollTo(0, 0), []);
  const { data: reach, loading } = useConfData((id) => `location/${id}`);
  const { data: images } = useConfData((id) => `images/conference/${id}`);
  const attractions = Array.isArray(images) ? images.filter((i) => i?.name) : [];

  return (
    <main className="location-page">
      <Section id="reach" num="10" sym="Lc" cat="a" title="How to Reach NIT Jalandhar">
        <div className="split">
          <div className="stack">
            <div className="card">
              <p className="label">Venue</p>
              <strong className="big">{site.venue}</strong>
              <p className="muted">Grand Finale · {site.finaleDates}</p>
            </div>
            {loading ? (
              <div className="skeleton" aria-label="Loading travel details">
                <span /><span /><span /><span />
              </div>
            ) : reach?.description ? (
              // HTML authored by organisers in the AMS admin panel, as on MAC2027.
              <div className="prose" dangerouslySetInnerHTML={{ __html: reach.description }} />
            ) : (
              <p className="muted body">Travel details will be posted here soon.</p>
            )}
          </div>
          <div className="map card">
            <iframe
              title="Map of Dr. B. R. Ambedkar NIT Jalandhar"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      {attractions.length > 0 && (
        <Section id="attractions" num="11" sym="Na" cat="e" title="Nearby Attractions">
          <div className="grid grid-3">
            {attractions.map((a) => (
              <figure key={a.name} className="card attraction">
                {a.imgLink && <img src={a.imgLink} alt={a.name} loading="lazy" />}
                <figcaption>{a.name}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}
