import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useConfData from '../hooks/useConfData';
import { CONF_ID } from '../api/conference';

// Pages whose content is written in the AMS admin panel.
// Logic copied from xceed-nitj/Proj8-Ece-MAC2027 (src/pages/CommonNews.jsx and
// src/pages/CommonTemplate.jsx), restyled for this site.

// /news/:newsid  →  GET conferencemodule/announcements/:newsid
export function NewsPage() {
  const { newsid } = useParams();
  const { data, loading } = useConfData(() => `announcements/${newsid}`);
  return <PageBody loading={loading} title={data?.title} html={data?.description} />;
}

// /:templateid  →  GET conferencemodule/commontemplate/:confid/:templateid
export function TemplatePage() {
  const { templateid } = useParams();
  const { data, loading } = useConfData((id) => `commontemplate/${id}/${templateid}`);
  return <PageBody loading={loading} title={data?.pageTitle} html={data?.description} />;
}

function PageBody({ loading, title, html }) {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main className="section page-body">
      <div className="panel">
        <Link to="/" className="mono small muted back">← Back to home</Link>
        {loading ? (
          <p className="muted">Loading…</p>
        ) : html ? (
          <>
            {/* HTML is authored by organisers in the AMS admin panel, as on MAC2027. */}
            <h1 className="page-title" dangerouslySetInnerHTML={{ __html: title || '' }} />
            <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
          </>
        ) : (
          <>
            <h1 className="page-title">Page not found</h1>
            <p className="muted">
              {CONF_ID ? 'This content is not available.' : 'This page is not available yet.'}
            </p>
          </>
        )}
      </div>
    </main>
  );
}
