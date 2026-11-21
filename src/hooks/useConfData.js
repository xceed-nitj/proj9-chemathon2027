import { useEffect, useState } from 'react';
import { CONF_ID, confGet } from '../api/conference';

// Fetches conferencemodule/{path(CONF_ID)} and returns { data, loading }.
// With no CONF_ID configured, or on any error, data stays null so callers
// fall back to the static content in src/content.js.
export default function useConfData(pathFor) {
  const [state, setState] = useState({ data: null, loading: Boolean(CONF_ID) });
  const path = CONF_ID ? pathFor(CONF_ID) : null;

  useEffect(() => {
    if (!path) return undefined;
    let cancelled = false;
    confGet(path)
      .then((data) => !cancelled && setState({ data, loading: false }))
      .catch((err) => {
        console.error(`AMS fetch failed for ${path}:`, err);
        if (!cancelled) setState({ data: null, loading: false });
      });
    return () => {
      cancelled = true;
    };
  }, [path]);

  return state;
}
