# Clarity

**A clean, mobile-first cryptocurrency wallet interface built with Next.js, React, and TypeScript.**

Clarity is a personal software engineering project exploring how to build an intuitive crypto wallet experience, with an emphasis on clear information hierarchy, reusable components, and a maintainable frontend architecture.

**Development status:** Early-stage UI prototype. The app currently displays mock balances and prices; it is not connected to any blockchain and cannot send or receive cryptocurrency.

## Features

The current prototype includes:

- **Portfolio overview** — calculates the total USD value of the displayed holdings.
- **Multi-chain asset list** — displays sample assets on Bitcoin, Ethereum, Zcash, and Solana, including network indicators.
- **Token details at a glance** — shows simulated balances, USD values, and 24-hour price changes.
- **Balance privacy toggle** — hides or reveals portfolio and token balances.
- **Light and dark themes** — includes a manual theme toggle and saves the preference in local storage.
- **Mobile-first layout** — a compact interface designed for narrow screens.

The **Send** and **Receive** buttons are currently UI placeholders; no transaction flow is implemented.

## Tech stack

- **Next.js** — App Router and application structure
- **React** — component-based UI and local state
- **TypeScript** — typed asset and network models
- **Tailwind CSS** — styling and responsive layouts
- **@web3icons/react** — token and network icons

## Getting started

### Prerequisites

- Node.js and npm

### Run locally

```bash
git clone <your-repository-url>
cd clarity
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

These commands assume the full Next.js project, including its `package.json` and npm scripts, is present in the repository.

## Project structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Account.tsx
    ├── Balance.tsx
    ├── Button.tsx
    ├── Header.tsx
    ├── SendReceive.tsx
    ├── ThemeToggle.tsx
    ├── TokenList.tsx
    └── WalletDashboard.tsx
```

## Roadmap

The following are **planned improvements**, not implemented features:

- [ ] Replace mock prices and balances with real data sources.
- [ ] Add wallet onboarding and account management.
- [ ] Implement blockchain connections and address validation.
- [ ] Build actual send and receive flows.
- [ ] Add backend services and persistent data storage where needed.
- [ ] Introduce automated tests for UI logic and critical workflows.
- [ ] Review security architecture before handling real funds.

## Security notice

**Clarity is not production-ready and has not undergone a security audit.**

The current version is a frontend demonstration. Do not enter real private keys or seed phrases, and do not use this project to manage real cryptocurrency funds.

## License

No open-source license has been selected yet. Until one is added, the repository's source code remains subject to applicable copyright law.