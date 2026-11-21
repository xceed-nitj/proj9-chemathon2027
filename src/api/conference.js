import axios from 'axios';
import getEnvironment from './getenvironment';

// The conference's id in the AMS conference module (xceed.nitj.ac.in admin panel).
// Set VITE_CONF_ID in a .env file, or paste the id here once the
// ChEMATHON 2027 conference has been created in AMS.
// While it is empty the site makes no API calls and shows the content in src/content.js.
export const CONF_ID = import.meta.env.VITE_CONF_ID || '';

// GET {apiUrl}/conferencemodule/{path}, the same way the MAC2027 site calls AMS.
export async function confGet(path) {
  const apiUrl = await getEnvironment();
  const res = await axios.get(`${apiUrl}/conferencemodule/${path}`, { withCredentials: true });
  return res.data;
}

// Admin-panel nav items → links (from MAC2027 src/components/Navbar/index.jsx).
export function resolveHref(item) {
  if (item.linkType === 'template') return `/${item.templateId || ''}`;
  return item.url || '#';
}

export function mapNavItem(item) {
  return {
    label: item.label,
    href: resolveHref(item),
    isExternal: item.linkType === 'external',
    subItems: item.subItems?.length
      ? [...item.subItems]
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((s) => ({ label: s.label, href: resolveHref(s), isExternal: s.linkType === 'external' }))
      : undefined,
  };
}
