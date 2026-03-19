## Deal Screening PPT Generator (React + TypeScript + Vite)

This app takes **structured deal data** (like the output of an LLM for an investment committee pitch) and generates a **PowerPoint deck** with:

- **Sections** such as Executive Summary, Market Opportunity, Asset Overview, Due Diligence, Financial Returns, Sensitivity, ESG, Risk, Fund Terms, Exit Strategy, Implementation Timeline, and Recommendation.
- **Dynamic content**: titles, summaries, bullet points, charts, tables, and images driven by JSON.
- **Infographics**: pie, bar, donut, semi‑donut, area, line, stacked bar, density‑style line, simple geo bubbles, and graph/network diagrams.
- A **consistent slide master** with header, footer, and slide numbers.

By default, the app ships with a **sample JSON payload** (`src/sample/sampleDealData.ts`) and a button to instantly download a sample IC deck.

---

## Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node)

---

## Install dependencies

From the project root (`deal-ppt`):

```bash
npm install
```

---

## Run the app in development

```bash
npm run dev
```

Then open the printed `http://localhost:5173` (or similar) URL in your browser.

In the UI:

- Click **“Download Sample PPT”** to generate a deck from `sampleDealData.ts`.

This is the easiest way to see the full slide structure and styling.

---

## Build for production

```bash
npm run build
```

The optimized assets are emitted into the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## Wiring your own API / LLM

The core PPT generator consumes a single JSON object of type `DealPptPayload`:

- **Definition**: see `src/types/dealPpt.ts`.
- **Sample data**: see `src/sample/sampleDealData.ts`.
- **PPT generator**: `src/ppt/generateDealPpt.ts`.

To hook up your own backend/LLM:

1. Implement an endpoint that returns `DealPptPayload` for a given query (deal / asset).
2. Update `src/services/dealApi.ts` with your API base URL and path.
3. Restore the commented‑out parts in `src/App.tsx` (query input, “Get Deal Data” button, and preview) so the app uses live data instead of only the sample.

All slides are generated programmatically from this JSON, so as long as your API respects `DealPptPayload`, the deck layout will adapt automatically.

