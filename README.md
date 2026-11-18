# Jiewei Zhou — personal academic website

A responsive static website for https://jieweiz.github.io/. No package installation or build is required.

## Publish with GitHub Pages

1. Put the contents of this directory in the root of `jieweiz/jieweiz.github.io`, on `main`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose **main** and **/ (root)**, then **Save**.
5. Check the Pages deployment and open https://jieweiz.github.io/ once it succeeds.

The `.nojekyll` file tells Pages to serve the static files directly. Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Edit

- `index.html`: biography, research, project roles, publications, teaching and contact details.
- `styles.css`: layout, colours and responsive styles.
- `script.js`: optional navigation highlighting. All content and core interactions work without it.
- `assets/Jiewei-Zhou-CV.pdf`: downloadable CV. Replace this file to update the CV.
- `assets/`: portrait and scientific figures.

Preview locally with `python3 -m http.server 8000` from this directory, then open http://localhost:8000/.

## Sources and editorial decisions

Content is based on the supplied November 2026 English CV and the supplied July 2026 academic-history and research-project presentations. The CV takes precedence for current role, project dates, publication status and supervision. The older research-project PPTX supplies background on ALBATOR; proposed developments are described as research directions, not completed capabilities. MALU is omitted because its funding status is unresolved in these sources. Historical citation counts, student grades, thesis completion estimates and project budgets are omitted.

Portrait: UC3M Department of Aerospace Engineering profile, https://aero.uc3m.es/people/jiewei-zhou/. ORCID and research portal links come from the same profile. The site's current Associate Professor title comes from the newer supplied CV.

Scientific panels are cropped from the supplied `Historial_ZHOU_Presentación.pdf` (slides 13, 20 and 24), with original axes and legends preserved. References appear alongside each figure. Images retain their original attribution; no third-party reuse licence is granted by this repository.

The first two 2026 article DOI links and the 2025 Journal of Electric Propulsion DOI were checked against Crossref by matching titles. Other citations are transcribed from the CV without guessed DOI links.

The full original CV is included as the requested academic source and download. The presentation files themselves are not included. There are no analytics, cookies, remote fonts or visitor-data collection.
