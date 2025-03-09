# Coding Guidelines

This document outlines the coding standards and best practices for the Expense Tracker project.

## Project Structure

### Directory Organization

- **Pages Directory**: Each page should have its own directory under the `@pages` folder:
  ```
  src/
    ├── pages/
    │   ├── auth/
    │   │   ├── login/
    │   │   ├── register/
    │   │   └── forgot-password/
    │   ├── dashboard/
    │   └── settings/
    ├── components/
    │   └── ui/
    ├── layouts/
    │   ├── auth.layout.tsx
    │   └── dashboard.layout.tsx
    ├── hooks/
    ├── contexts/
    ├── services/
    └── utils/
  ```

### Component Encapsulation

Each directory containing multiple related components should follow these rules:

- Include an `index.ts` file ONLY if components need to be used outside the directory
- Export ONLY the components that are actually used outside the directory
- Internal components should be imported directly, not through the index
- This creates a clear boundary between public and internal components

Example of proper component encapsulation:

```
navbar/
  ├── index.ts                 # Exports only the main Navbar component
  ├── navbar.comp.tsx          # Main component, used outside
  ├── navbar-logo.comp.tsx     # Internal component
  ├── navbar-avatar.comp.tsx     # Internal component
  └── navbar-trigger.comp.tsx     # Internal component

# index.ts - Only exports public interface
export { Navbar } from './navbar.comp';

# Inside navbar.comp.tsx - Direct imports for internal components
import { NavbarLogo } from './navbar-logo.comp';
import { NavbarAvatar } from './navbar-avatar.comp';

# ❌ WRONG - Don't export internal components
export { NavbarLogo } from './navbar-logo.comp';
```

Benefits of this approach:

- Creates clear boundaries between public and private components
- Makes it obvious which components are meant for external use
- Prevents accidental usage of internal components
- Makes refactoring safer and more maintainable
- Provides a single source of truth for the public API

This pattern should be followed across all directories:

```
src/
  ├── components/
  │   ├── ui/
  │   │   ├── index.ts        # Exports all base UI components
  │   │   └── button.ui.tsx
  ├── utils/
  │   ├── index.ts            # Exports all utility functions
  │   └── format-date.utils.ts
  └── hooks/
      ├── index.ts            # Exports all custom hooks
      └── use-auth.hook.ts
```

### Page Structure

Each page directory should follow this structure:

```
profile/
  ├── profile.page.tsx         # Main page component
  ├── profile.schema.ts        # Form validation and types
  ├── profile-form.comp.tsx    # Page-specific components
  ├── profile-stats.comp.tsx   # Page-specific components
  └── index.ts                 # Exports only profile.page.tsx
```

### Icons Organization

All SVG icons should be organized in the `@assets/icons` directory following these rules:

- Each icon should be a separate React component in its own file
- File naming: `icon-name.icon.tsx`
- All icons must be exported through the `index.ts` file
- Icons should accept and spread SVG props for flexibility
- Example structure:
  ```
  src/assets/
    └── icons/
        ├── refresh.icon.tsx
        ├── upload.icon.tsx
        ├── user.icon.tsx
        └── index.ts
  ```

Example icon component:

```typescript
import { SVGProps } from 'react';

export const RefreshIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    {/* SVG paths */}
  </svg>
);
```

Usage:

```typescript
import { RefreshIcon } from '@/assets/icons';
```

## Naming Conventions

### File Naming

- **Use Kebab Case**: All file names should use kebab-case (lowercase with hyphens)
- **Include Type Suffix**: Files must include their type as a suffix
- **Examples**:
  - ✅ `expense-list.comp.tsx`
  - ✅ `auth-context.context.tsx`
  - ✅ `use-expenses.hook.ts`
  - ❌ `ExpenseList.tsx`
  - ❌ `authContext.tsx`

### Type Suffixes

Components:

- `.page.tsx` - Page components
- `.layout.tsx` - Layout components
- `.comp.tsx` - Regular components
- `.ui.tsx` - Base UI components (MUST be in @components/ui directory)
- `.form.tsx` - Form components

State & Logic:

- `.context.tsx` - React contexts
- `.hook.ts` - Custom hooks
- `.service.ts` - Services

Data & Types:

- `.schema.ts` - Form/data schemas
- `.type.ts` - TypeScript types/interfaces
- `.utils.ts` - Utility functions (MUST be in @utils directory)

Assets & Tests:

- `.icon.tsx` - Icon components

### Component Naming

- **Page Components**: Must end with 'Page'

  - ✅ `LoginPage`, `DashboardPage`, `ProfilePage`
  - ❌ `Login`, `Dashboard`, `Profile`

- **React Components**: Use PascalCase

  - ✅ `function ExpenseList() { ... }`
  - ❌ `function expenseList() { ... }`

- **Functions and Variables**: Use camelCase

  - ✅ `const calculateTotal = () => { ... }`
  - ❌ `const CalculateTotal = () => { ... }`

- **Constants**: Use UPPER_SNAKE_CASE
  - ✅ `const API_BASE_URL = 'https://api.example.com'`
  - ❌ `const apiBaseUrl = 'https://api.example.com'`

## Code Organization

### Path Aliases

Always use path aliases for imports to improve readability and maintainability:

- **Configure Path Aliases**: Use `@` prefix for src directory aliases
- **Examples**:

  ```typescript
  // ✅ Good
  import { Button } from '@/components/ui';
  import { useAuth } from '@/hooks';
  import { DashboardLayout } from '@/layouts';

  // ❌ Bad
  import { Button } from '../../../components/ui';
  import { useAuth } from '../../hooks';
  import { DashboardLayout } from '../../layouts';
  ```

- **Common Aliases**:
  - `@/components/*` - Component imports
  - `@/layouts/*` - Layout imports
  - `@/hooks/*` - Hook imports
  - `@/contexts/*` - Context imports
  - `@/services/*` - Service imports
  - `@/utils/*` - Utility imports
  - `@/types/*` - Type imports
  - `@/assets/*` - Asset imports

### Exports

- **No Default Exports**: Always use named exports

  ```typescript
  // ✅ Good
  export const Button: React.FC = () => { ... }

  // ❌ Bad
  export default Button
  ```

### File Extensions

- `.tsx` - React components
- `.ts` - TypeScript files
- `.css`/`.scss` - Stylesheets
- `.test.tsx` - Component tests
- `.test.ts` - Unit tests

## CSS and Styling

- Use Tailwind CSS classes for styling
- Follow utility-first principles
- Group related classes logically
- Extract common patterns into components

## Testing

Testing guidelines will be added when testing is implemented.

## Git Workflow

- Write clear, concise commit messages
- Keep commits focused on single changes
- Use feature branches
- Squash commits before merging to main

### Utility Functions

All utility functions must follow these rules:

- Must be placed in the `@utils` directory
- Must use the `.utils.ts` suffix
- Must be pure functions with a single responsibility

Example structure:

```
src/utils/
  ├── format-date.utils.ts
  ├── calculate-total.utils.ts
  ├── string-helpers.utils.ts
  └── index.ts
```

### UI Components

All base UI components must follow these rules:

- Must be placed in the `@components/ui` directory
- Must use the `.ui.tsx` suffix
- Must be reusable across the entire application
- Must be exported through the directory's index.ts
- Should be the foundation of the component library

Example structure:

```
src/components/ui/
  ├── button.ui.tsx
  ├── input.ui.tsx
  ├── card.ui.tsx
  ├── drawer.ui.tsx
  └── index.ts
```
