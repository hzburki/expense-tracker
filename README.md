# Expense Tracker

A simple expense tracking application built with React, TypeScript, and Vite.

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm or yarn

### Installation

```bash
# Use the correct Node.js version
nvm use

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## Code Quality

### Linting

```bash
# Run ESLint
npm run lint

# Run ESLint with auto-fix
npm run lint:fix
```

### Pre-commit Hooks

This project uses Husky and lint-staged to run code quality checks on staged files before committing:

- ESLint will automatically fix issues in staged JavaScript and TypeScript files
- Prettier will format all staged files according to the project's formatting rules

This ensures that all committed code follows the project's coding standards.

## Prettier Configuration

This project uses Prettier for code formatting. The configuration is defined in `.prettierrc` and includes:

- Semi-colons at the end of statements
- 2 spaces for indentation
- 100 character line width
- Single quotes for strings
- ES5 trailing commas
- Bracket spacing
- No parentheses around single arrow function parameters
- Tailwind CSS class sorting (via prettier-plugin-tailwindcss)

### Format on Save

VS Code is configured to automatically format your code when you save a file. This is set up in the `.vscode/settings.json` file.

### NPM Scripts

The following npm scripts are available for formatting:

```bash
# Format all files
npm run format

# Check if files are formatted correctly
npm run format:check

# Run ESLint with auto-fix (includes Prettier formatting)
npm run lint:fix
```

### VS Code Extension

For the best experience, install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension in VS Code.
