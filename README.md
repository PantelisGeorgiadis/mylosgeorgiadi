# Μύλος Γεωργιάδη — website

Static single-page site (Greek default, EN toggle) for the Μύλος Γεωργιάδη event
venue in Ampelokipoi, Kastoria. No build step: plain HTML/CSS/JS + media.

- Live: https://mylosgeorgiadi.gr (after DNS) / https://pantelisgeorgiadis.github.io/mylosgeorgiadi
- Mirror: https://mylos-georgiadi.netlify.app

Deploy: every push to `main` runs `.github/workflows/deploy-to-gh-pages.yml`
(checkout → copy `index.html`, `styles.css`, `script.js`, `CNAME`, `assets/`
into `public/` → `peaceiris/actions-gh-pages` publishes to the `gh-pages`
branch). GitHub serves the custom domain from `CNAME`; the HTTPS certificate
is issued automatically once DNS points here (4× A records for the apex to
185.199.108.153–111.153 and a `www` CNAME to `pantelisgeorgiadis.github.io`).

The editable source of truth (photos originals, notes) lives in the local
`MylosWebsite` project folder; only page-referenced files are committed here.
