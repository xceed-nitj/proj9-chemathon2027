import { useEffect, useState } from 'react';
import { CONF_ID, confGet } from '../api/conference';

// Adapted from xceed-nitj/Proj8-Ece-MAC2027 (src/useMaintenance.js).
//
// What to do when the maintenance endpoint can't be reached or returns an
// error: true keeps the site in maintenance, false shows the normal site.
// MAC2027 uses true; this site uses false so it stays up while the
// conference is not yet set up in AMS.
const FALLBACK_ENABLED = false;

// Fetches maintenance status for a conference from the backend:
//   GET {apiUrl}/conferencemodule/maintenance/public/{confid}
// Expected response:
//   { enabled, name, subtitle, message }
export default function useMaintenance(confid = CONF_ID) {
  const [state, setState] = useState({ loading: Boolean(confid), enabled: false, content: {} });

  useEffect(() => {
    if (!confid) return undefined;
    let cancelled = false;

    confGet(`maintenance/public/${confid}`)
      .then((body) => {
        if (cancelled) return;
        const data = body?.data ?? body ?? {};
        setState({ loading: false, enabled: data.enabled === true, content: data });
      })
      .catch(() => {
        if (cancelled) return;
        setState({ loading: false, enabled: FALLBACK_ENABLED, content: {} });
      });

    return () => {
      cancelled = true;
    };
  }, [confid]);

  return state;
}
