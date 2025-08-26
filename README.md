[![Playwright Tests](https://github.com/candwberry/tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/candwberry/tests/actions/workflows/playwright.yml)
[![Lighthouse CI](https://github.com/candwberry/tests/actions/workflows/lighthouseci.yml/badge.svg)](https://github.com/candwberry/tests/actions/workflows/lighthouseci.yml)

# cwberry.com Tests

This repository contains automated tests for [www.cwberry.com](https://www.cwberry.com).  
It includes:

- **Playwright tests** – End-to-end checks against production.  
- **Lighthouse test** – Runs a performance/accessibility report.  

They run using **GitHub Actions**.

---

## How to Use

1. Go to the **Actions** tab.
2. Select the action you want to run (*Playwright Tests* or *Lighthouse CI*).
3. Click the **Run workflow** button.
4. Refresh the page.

### Results
- **Playwright**: Test results appear in the workflow summary, with a detailed **HTML report** downloadable as an artifact.  
- **Lighthouse**: The **report is shown in the GitHub status checks** and can be viewed directly after the run.  

---

## Notes
- Tests run against the **production site**.
- Workflows must be triggered manually (for now)
