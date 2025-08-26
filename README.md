[![Lighthouse CI](https://github.com/candwberry/tests/actions/workflows/lighthouseci.yml/badge.svg)](https://github.com/candwberry/tests/actions/workflows/lighthouseci.yml)

[![Playwright Tests](https://github.com/candwberry/tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/candwberry/tests/actions/workflows/playwright.yml)

# cwberry.com Tests

This repository contains automated tests for [www.cwberry.com](https://www.cwberry.com).  
It includes:

- **Playwright tests** – End-to-end checks against production.  
- **Lighthouse test** – Runs a performance/accessibility report.  

They run using **GitHub Actions**.

---

## How to Use

1. Click to this [link](https://github.com/candwberry/tests/actions/workflows/workflow.yml).  
2. Click **Run workflow** to start the tests.
3. Reload the page until you see the new workflow run with an orange spinner.

### Results
- **Playwright**: Test results appear in the workflow summary, with a detailed **HTML report** downloadable as an artifact.  
- **Lighthouse**: The **report is shown in the GitHub status checks** and can be viewed directly after the run.  

---

## Notes
- Tests run against the **production site**.
- Workflows must be triggered manually (for now)
