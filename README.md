# VerityScript

VerityScript is a responsive Bible-study workspace built with Next.js, React, and TypeScript. It uses an evergreen and ivory study-desk visual language and supports light and dark themes.

## Run locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Run `npm run lint`, `npm test`, and `npm run build` for checks.

## Current first-version features

- Responsive navigation across the reader, word study, cross references, mind maps, PDF research, study companion, journal, timeline, and practice modules.
- Reader book/chapter selection, translation selector, chapter bookmarks and highlights. These controls are local study references; the reader does not currently display Bible text.
- Browser-local persistence for bookmarks, chapter highlights, journal notes, and reading intentions.
- Searchable sample reference list, a mind-map canvas preview, and practice-card navigation.
- Light/dark theme, mobile navigation, keyboard-visible focus, reduced-motion support, and explicit empty/loading/source states.
- Basic unit coverage for local study storage helpers.

## Data sources and boundaries

Bible text, translation comparison, dictionaries, morphology, cross references, historical chronology, geographic places, document citations, and AI retrieval are separate future data integrations. The interface labels these as unconnected and avoids fabricating verse text, lexicon entries, page numbers, cross-reference claims, or historical facts. Some reference labels and navigation entries are illustrative sample data, not a verified corpus.

The Research Library is currently a UI placeholder. It does not upload, extract, or OCR PDFs. Configure a document processing service before enabling this module. The AI Study Companion is also a UI placeholder: no prompt is sent and no model is configured. When implemented, keep API credentials on the server, retrieve from authorized data sources, and return citation metadata with each response. Mind-map editing and account-backed syncing are not implemented. Reading intentions save locally, but completion tracking and streaks are not implemented.

## Licensing

Connect only Bible translations and reference works whose licenses permit the intended display, storage, search, and comparison use. Translation copyright and attribution requirements vary by provider. The app ships without embedded scripture or dictionary datasets. Sample references in the interface are not a substitute for licensed source data.

## Persistence and privacy

Notes, plans, bookmarks, highlights, and theme are saved in this browser's local storage. They are not synced, encrypted, or backed up. Do not use shared devices for sensitive journal content. A production release should add account-backed persistence, export/delete controls, and an explicit privacy policy.

## Deployment

Build with `npm run build` and deploy the Next.js app to a compatible Node.js host. Set any future integration secrets as server-side environment variables in the deployment platform. No deployment provider or API keys are currently configured. Do not expose secrets through `NEXT_PUBLIC_*` variables.

## Limitations

This is a usable interface and local study-notes MVP, not a complete searchable Bible corpus. PDF OCR, translation licensing, Strong's dictionaries, morphology, sourced cross references and historical data, server-backed user accounts, AI retrieval, reading-plan progress, and mind-map editing need data and services before they can be activated.
