# IIChE-ChEMATHON 2027

Website for IIChE-ChEMATHON 2027, the third edition of the IIChE Hackathon
(Grand Finale 18–20 February 2027, Dr. B. R. Ambedkar NIT Jalandhar).

Built with React + Vite. The page sits on an animated periodic-table background
whose tiles slowly light up in their element-category colours.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

`public/_redirects` sends every path to `index.html`, so hosting on Netlify (or
anything that honours `_redirects`) works with client-side routes.

## Editing content

All event details (theme, problem statements, prizes, dates, fees, committee,
FAQ, contact) are in **`src/content.js`**. Change them there; the layout code
does not need to be touched.

Things still to fill in, marked `TODO` in `src/content.js`:

- `site.submissionUrl` — the idea submission form link
- the team size / eligibility FAQ answer

The pulse background is configured in `pulse` in the same file: accent colour,
speed (`seconds`, larger is slower) and `tileColors` (`'periodic'` or `'accent'`).

## AMS backend (conference module)

The site talks to the AMS conference module the same way the MAC2027 site
(`xceed-nitj/Proj8-Ece-MAC2027`) does. `src/api/getenvironment.js` is copied from
it: it uses `https://xceed.nitj.ac.in` when that server is up, and
`https://nitjtt.onrender.com` otherwise.

The conference id is `6b0117a59570b0e3d8a5cd04`, set in `src/api/conference.js`
(override it with `VITE_CONF_ID` in a `.env` file). Only two parts of the site
come from the admin panel; each falls back to `src/content.js` if the API
returns nothing or cannot be reached:

| Feature | Endpoint (`/conferencemodule/...`) | Where it shows |
| --- | --- | --- |
| Navbar | `navitem/public/:confId` (used when `navbarMode` is `"dynamic"`) | header menu |
| Important dates | `eventDates/conference/:confId` | Important dates section |

Everything else is static content from `src/content.js`.
