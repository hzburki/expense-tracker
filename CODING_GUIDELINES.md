# Coding Guidelines

This document outlines the coding standards and best practices for the Expense Tracker project.

## Naming Conventions

### Files and Directories

- **Kebab Case**: All file and directory names should use kebab-case (lowercase with hyphens).

  - ✅ `expense-list.tsx`, `auth-context.tsx`, `use-expenses.ts`
  - ❌ `ExpenseList.tsx`, `authContext.tsx`, `useExpenses.ts`

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

### CSS Classes

- **Kebab Case** for CSS class names:
  - ✅ `expense-item`, `nav-bar`, `form-container`
  - ❌ `expenseItem`, `NavBar`, `formContainer`

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
