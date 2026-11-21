import { Link, useLocation } from 'react-router-dom';
import { pulse, site, nav as staticNav, contact } from '../content';
import useConfData from '../hooks/useConfData';
import { mapNavItem, resolveHref } from '../api/conference';
import PulseWall from './PulseWall';

// Page frame shared by every route: the full-page pulse wall, header and footer.
export default function Layout({ children }) {
  return (
    <div className="page" style={{ '--accent': pulse.accent }}>
      <PulseWall />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function NavLink({ item, className = '' }) {
  const { pathname } = useLocation();
  const href = item.href || '#';
  if (item.isExternal || href.startsWith('http')) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    );
  }
  if (href.startsWith('#')) {
    // in-page anchors work from any route
    return (
      <Link className={className} to={`/${href}`}>
        {item.label}
      </Link>
    );
  }
  const active = href !== '/' && pathname === href;
  return (
    <Link className={`${className} ${active ? 'active' : ''}`.trim()} to={href} aria-current={active ? 'page' : undefined}>
      {item.label}
    </Link>
  );
}

function Header() {
  // Admin-driven menu (MAC2027 navbar behaviour): used only when the admin
  // panel has navbarMode "dynamic" and at least one item; otherwise the
  // static menu from content.js.
  const { data } = useConfData((id) => `navitem/public/${id}`);
  let items = staticNav;
  let button = { label: 'Submit idea', href: '#fees' };
  const dyn = data?.navbarMode === 'dynamic' && Array.isArray(data.items) ? data.items : [];
  if (dyn.length) {
    items = dyn.filter((i) => !i.isButton).map(mapNavItem);
    const btn = dyn.find((i) => i.isButton);
    if (btn) button = { label: btn.label, href: resolveHref(btn), isExternal: btn.linkType === 'external' };
  }

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <span className="brand-tile">Ch</span>
        {site.name}
      </Link>
      <nav aria-label="Primary" className="site-nav">
        {items.map((item) =>
          item.subItems ? (
            <details key={item.label} className="nav-menu">
              <summary>{item.label}</summary>
              <div className="nav-menu-list">
                {item.subItems.map((s) => (
                  <NavLink key={s.label} item={s} />
                ))}
              </div>
            </details>
          ) : (
            <NavLink key={item.label} item={item} />
          ),
        )}
        <NavLink item={button} className="btn btn-dark btn-sm" />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="section">
      <div className="site-footer">
        <span className="brand brand-light">
          <span className="brand-tile brand-tile-sm">Ch</span>
          {site.name}
        </span>
        <span>{site.edition} · NIT Jalandhar</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </footer>
  );
}
