# Coding Guidelines

This document outlines the coding standards and best practices for the Expense Tracker project.

## Naming Conventions

### Files and Directories

- **Kebab Case with Type Suffix**: All file names should use kebab-case (lowercase with hyphens) and include the file type as a suffix.

  - ✅ `expense-list.comp.tsx`, `auth-context.context.tsx`, `use-expenses.hook.ts`
  - ✅ `dashboard.page.tsx`, `login.page.tsx`, `transaction.form.tsx`
  - ❌ `ExpenseList.tsx`, `authContext.tsx`, `useExpenses.ts`
  - ❌ `dashboard-page.tsx`, `login-page.tsx`

- **Common Type Suffixes**:

  - `.page.tsx` - For page components
  - `.comp.tsx` - For regular components
  - `.form.tsx` - For form components
  - `.layout.tsx` - For layout components
  - `.hook.ts` - For custom hooks
  - `.context.tsx` - For React contexts
  - `.util.ts` - For utility functions
  - `.type.ts` - For TypeScript types and interfaces
  - `.service.ts` - For services

- **File Extensions**:
  - React components: `.tsx`
  - TypeScript files: `.ts`
  - CSS/SCSS files: `.css`/`.scss`
  - Test files: `.test.tsx` or `.test.ts`

### Components and Functions

- **PascalCase** for React components:

  - ✅ `function ExpenseList() { ... }`
  - ❌ `function expenseList() { ... }`

- **camelCase** for functions, variables, and instances:

  - ✅ `const calculateTotal = () => { ... }`
  - ❌ `const CalculateTotal = () => { ... }`

- **UPPER_SNAKE_CASE** for constants:
  - ✅ `const API_BASE_URL = 'https://api.example.com'`
  - ❌ `const apiBaseUrl = 'https://api.example.com'`

### CSS and Styling

- Use Tailwind CSS classes for all styling needs

  - ✅ `flex items-center justify-between`
  - ✅ `bg-blue-500 hover:bg-blue-600 text-white`
  - ❌ Custom CSS classes or separate CSS files

- When custom CSS is absolutely required:
  1. Add custom styles through Tailwind's configuration in `tailwind.config.js`
  2. If that's not possible, provide detailed documentation explaining:
     - Why Tailwind classes couldn't solve the problem
     - What specific browser/platform issue required custom CSS
     - What alternatives were considered
  3. Use **Kebab Case** for any custom CSS class names:
     - ✅ `custom-animation`, `special-layout`
     - ❌ `customAnimation`, `SpecialLayout`

## Code Formatting

- All code is automatically formatted using Prettier on save and pre-commit.
- The Prettier configuration is defined in `.prettierrc`.

## TypeScript

- Always use proper TypeScript types instead of `any`.
- Create interfaces or types for component props.
- Use TypeScript's built-in types when possible (e.g., `Array<T>` or `T[]`, `Record<K, V>`).

## React Best Practices

- Use functional components with hooks instead of class components.
- Keep components small and focused on a single responsibility.
- Extract reusable logic into custom hooks.
- Use React context for state that needs to be accessed by many components.

## Imports

- Group imports in the following order, separated by a blank line:
  1. External libraries (React, React Router, etc.)
  2. Internal modules (components, hooks, utils, etc.)
  3. Assets (images, styles, etc.)

```tsx
// External libraries
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Internal modules
import { ExpenseType } from '../types/expense-types';
import { formatCurrency } from '../utils/format-utils';

// Assets
import './expense-item.css';
```

## Testing

There will be no tests for now. Testing guidelines will be added in the future when testing is implemented.

## Git Workflow

- Write clear, concise commit messages.
- Keep commits focused on a single change.
- Use feature branches for new features or bug fixes.
- Squash commits before merging to main branch.
