# Saucedemo Playwright UI Tests

UI tests for [Saucedemo](https://www.saucedemo.com/) using Playwright and TypeScript with Page Object Model (POM).

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
npx playwright install
```

Copy `.env.example` to `.env` and set credentials (used for valid-login tests):

```bash
cp .env.example .env
```

Edit `.env`:

- `LOGIN_USERNAME`
- `LOGIN_PASSWORD`

## Running Tests

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests headless |
| `npm run test:headed` | Run tests in headed browser |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run test:report` | Run tests and open HTML report |

## Viewing the Report

After a test run, open the HTML report:

```bash
npx playwright show-report
```

Screenshots are captured automatically on test failure (stored in `test-results/`).

## Code Quality

| Command | Description |
|---------|-------------|
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without writing |

## Project Structure

```
├── pages/           # Page Object Model
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   ├── login.spec.ts
│   ├── inventory.spec.ts
│   └── checkout.spec.ts
├── .env.example
├── .env              (create from .env.example, not committed)
├── playwright.config.ts
└── package.json
```

## Test Coverage

- **Login**: Valid login, invalid credentials (error message assertion)
- **Inventory**: Sort dropdown (Z–A), Add to cart (button click, badge assertion)
- **Checkout**: Shipping form (text inputs), complete order flow

Locators used: `id` (#user-name, #password, #checkout, #first-name, etc.), CSS (e.g. .product_sort_container, .inventory_item_name, .error-message-container), XPath (e.g. error message container).
