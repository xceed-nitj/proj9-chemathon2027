import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Section, { ElementBadge } from '../components/Section';
import { CATEGORY_COLORS } from '../components/elements';
import useConfData from '../hooks/useConfData';
import formatDate from '../api/formatDate';
import {
  site, organizers, steps, themes, prizes, dates, fees, committee, faq, contact,
} from '../content';

export default function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <main>
      <Hero />
      <Updates />
      <About />
      <HowItWorks />
      <Problems />
      <Prizes />
      <Dates />
      <Fees />
      <Committee />
      <Faq />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="hero-kicker">
          <div className="hero-tile">
            <span>2027</span>
            <strong>Ch</strong>
            <span className="hero-tile-name">ChEMATHON</span>
          </div>
          <p className="mono muted">
            Third edition of the
            <br />
            IIChE Hackathon<span className="cursor">_</span>
          </p>
        </div>
        <h1>
          {site.headline[0]}
          <br />
          {site.headline[1]}
        </h1>
        <p className="lead">
          {site.theme}. 24 problem statements across 8 themes.
        </p>
        <div className="btn-row">
          <a className="btn btn-dark" href={site.submissionUrl}>Submit your idea — free</a>
          <a className="btn btn-light" href="#problems">See problem statements</a>
        </div>
        <dl className="facts">
          <div><dt>Grand finale</dt><dd>{site.finaleDates}</dd></div>
          <div><dt>Where</dt><dd>{site.venueShort}</dd></div>
          <div><dt>Prizes</dt><dd>{site.prizePool}</dd></div>
        </dl>
      </div>
    </section>
  );
}

// Announcements from the AMS admin panel. Hidden until there are some.
function Updates() {
  const { data } = useConfData((id) => `announcements/conf/${id}`);
  const items = Array.isArray(data)
    ? data.filter((n) => !n.hidden).sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0))
    : [];
  if (!items.length) return null;
  return (
    <Section id="updates" num="00" sym="Nw" cat="c" title="Latest updates">
      <div className="grid grid-3">
        {items.map((n) => {
          const href = n.link ? n.link : `/news/${n._id}`;
          return (
            <article key={n._id} className="card">
              <h3>{n.title}</h3>
              {n.metaDescription && <p className="muted">{n.metaDescription}</p>}
              {href.startsWith('http') ? (
                <a href={href} target="_blank" rel="noopener noreferrer">Read more →</a>
              ) : (
                <Link to={href}>Read more →</Link>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" num="01" sym="Ab" cat="n" title="About">
      <div className="split">
        <div className="stack">
          <p className="label">Theme</p>
          <p className="statement">{site.theme}</p>
          <p className="muted body">
            {site.name} is the third edition of the IIChE Hackathon. Teams submit ideas against 24 problem
            statements tied to India&apos;s national missions and the UN Sustainable Development Goals.
            Shortlisted teams build and present their solutions at the Grand Finale at {site.venue},
            from 18 to 20 February 2027.
          </p>
        </div>
        <div className="stack stack-sm">
          <div className="card">
            <p className="label">Organized by</p>
            {organizers.organizedBy.map((o) => <strong key={o}>{o}</strong>)}
          </div>
          <div className="card">
            <p className="label">In association with</p>
            {organizers.inAssociationWith.map((o) => <strong key={o}>{o}</strong>)}
          </div>
        </div>
      </div>
      <div className="logos">
        {organizers.logos.map((l) => (
          <div key={l.src} className="card logo"><img src={l.src} alt={l.alt} /></div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section id="how" num="02" sym="Hw" cat="e" title="How it works">
      <ol className="grid grid-4 plain">
        {steps.map((s, i) => (
          <li key={s.title} className={`card ${s.highlight ? 'card-accent' : ''}`}>
            <span className="mono small">STEP {i + 1} · {s.when.toUpperCase()}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Problems() {
  return (
    <Section
      id="problems" num="03" sym="Ps" cat="t" title="Problem statements"
      aside={<span className="mono small muted">8 themes · 24 problems</span>}
    >
      <div className="grid grid-2">
        {themes.map((t, i) => (
          <article key={t.title} className="card theme">
            <div className="theme-head">
              <ElementBadge num={String(i + 1).padStart(2, '0')} sym={t.sym} color={CATEGORY_COLORS[t.cat]} size={64} />
              <div>
                <h3>{t.title}</h3>
                <p className="mono small muted">{t.sdg}</p>
              </div>
            </div>
            <span className="chip">{t.missions}</span>
            <ol className="plain problems">
              {t.problems.map((p, j) => (
                <li key={p}><span className="mono small muted">{i + 1}.{j + 1}</span><span>{p}</span></li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Prizes() {
  return (
    <Section id="prizes" num="04" sym="Pz" cat="h" title="Prizes" aside={<strong className="aside-strong">{site.prizePool} in prizes</strong>}>
      <div className="grid grid-3">
        {prizes.map((p) => (
          <div key={p.place} className={`card prize ${p.highlight ? 'card-accent' : ''}`}>
            <span className="mono small">{p.place.toUpperCase()}</span>
            <span className="small">Up to</span>
            <span className="prize-amount">{p.amount}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Event dates come from AMS (eventDates) when configured; otherwise content.js.
function Dates() {
  const { data } = useConfData((id) => `eventDates/conference/${id}`);
  const list = Array.isArray(data) && data.length
    ? data.map((d, i) => ({
        label: d.title,
        date: formatDate(d.extended ? d.newDate : d.date),
        was: d.extended ? formatDate(d.date) : null,
        highlight: i === data.length - 1,
      }))
    : dates;
  return (
    <Section id="dates" num="05" sym="Dt" cat="g" title="Important dates">
      <ol className="grid grid-dates plain">
        {list.map((d) => (
          <li key={d.label + d.date} className={`card ${d.highlight ? 'card-accent' : ''}`}>
            <span className="date">{d.date}</span>
            {d.was && <s className="mono small muted">{d.was}</s>}
            <span className={d.highlight ? '' : 'muted'}>{d.label}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Fees() {
  return (
    <Section
      id="fees" num="06" sym="Rg" cat="a" title="Registration fees"
      aside={<a className="btn btn-dark" href={site.submissionUrl}>Submit your idea</a>}
    >
      <div className="split split-fees">
        <div className="stack stack-sm">
          <div className="table-wrap">
            <table className="tbl">
              <thead><tr><th>Participants</th><th>IIChE member</th><th>Non-IIChE</th></tr></thead>
              <tbody>
                {fees.rows.map((r) => (
                  <tr key={r.who}><td>{r.who}</td><td className="num">{r.member}</td><td className="num">{r.nonMember}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card note">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></svg>
            <p>{fees.note}</p>
          </div>
        </div>
        <div className="card qr">
          <span className="mono small muted">SCAN &amp; PAY</span>
          <img src={fees.qr} alt="QR code for registration payment" />
          <span className="small muted">for Grand Finale registration payment</span>
        </div>
      </div>
    </Section>
  );
}

function Committee() {
  return (
    <Section id="committee" num="07" sym="Oc" cat="l" title="Committee">
      {committee.map((g) => (
        <div key={g.role} className="stack stack-sm">
          <h3 className="label">{g.role}</h3>
          <div className="grid grid-people">
            {g.people.map((p) => (
              <div key={p.name} className="card person">
                <strong>{p.name}</strong>
                <span className="small muted">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

function Faq() {
  return (
    <Section id="faq" num="08" sym="Fq" cat="m" title="FAQ">
      <div className="faq">
        {faq.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" num="09" sym="Ct" cat="p" title="Venue and contact">
      <div className="grid grid-2">
        <div className="card">
          <p className="label">Venue</p>
          <strong className="big">{site.venue}</strong>
          <p className="muted">Grand Finale · 18 – 20 February 2027</p>
        </div>
        <div className="card card-dark">
          <p className="label">Contact us</p>
          {contact.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/-/g, '')}`}>{p}</a>
          ))}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.website}>{contact.website.replace('https://', '')}</a>
        </div>
      </div>
    </Section>
  );
}
