import { useState } from 'react';
import './App.css';
// import type { DealPptPayload } from './types/dealPpt';
// import { fetchDealPptData } from './services/dealApi';
import { generateDealPpt } from './ppt/generateDealPpt';
import { sampleDealData } from './sample/sampleDealData';

function App() {
  const [loading, setLoading] = useState(false);

  const handleDownloadSample = async () => {
    setLoading(true);
    try {
      // In this demo we only generate from local sample JSON.
      // For real usage, wire API and set dealData from response.
      // setDealData(sampleDealData);
      await generateDealPpt(sampleDealData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <div>
          {/* <h1>Deal Screening PPT Generator</h1> */}
          {/* <p className="subtitle">
            Enter a company or asset name, fetch LLM-generated IC content, and download a PPT deck.
          </p> */}
        </div>
      </header>

      <main className="app-main">
        <section className="card">
          <h2>1. Describe the deal</h2>
          <div className="input-row">
            {/* <input
              className="text-input"
              placeholder="e.g. Acquisition of ABC Mall, Mumbai"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="primary-btn"
              onClick={handleFetch}
              disabled={loading || !query.trim()}
            >
              {loading ? 'Fetching…' : 'Get Deal Data'}
            </button> */}
            <button className="secondary-btn" onClick={handleDownloadSample} disabled={loading}>
              Download Sample PPT
            </button>
          </div>
          {/* {error && <div className="error">{error}</div>} */}
        </section>

        {/* {dealData && (
          <>
            <section className="card">
              <h2>2. Deal overview</h2>
              <div className="deal-meta">
                <div>
                  <div className="label">Deal</div>
                  <div className="value">{dealData.dealName}</div>
                </div>
                <div>
                  <div className="label">Deal ID</div>
                  <div className="value">{dealData.dealId}</div>
                </div>
                <div>
                  <div className="label">Fund</div>
                  <div className="value">{dealData.fundName}</div>
                </div>
                <div>
                  <div className="label">Sponsor</div>
                  <div className="value">{dealData.sponsorName}</div>
                </div>
              </div>
            </section>

            <section className="card">
              <h2>3. Slide outline</h2>
              <ol className="slides-list">
                {dealData.slides.map((s, idx) => (
                  <li key={idx}>
                    <div className="slide-title">{s.title}</div>
                    <div className="slide-summary">
                      {s.summary.length > 120
                        ? `${s.summary.slice(0, 120)}…`
                        : s.summary}
                    </div>
                    {s.charts && s.charts.length > 0 && (
                      <div className="pill">
                        {s.charts.length} chart{s.charts.length > 1 ? 's' : ''}
                      </div>
                    )}
                    {s.tables && s.tables.length > 0 && (
                      <div className="pill">
                        {s.tables.length} table{s.tables.length > 1 ? 's' : ''}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </section>

            <section className="card actions">
              <button className="primary-btn" onClick={handleDownload}>
                Download PPT
              </button>
              <p className="hint">
                The PPT will include a default header, footer, and slide master. Charts, tables and
                images are generated dynamically from the API response.
              </p>
            </section>
          </>
        )} */}
      </main>
    </div>
  );
}

export default App;

