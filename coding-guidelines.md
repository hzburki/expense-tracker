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

### Page Structure

Each page directory should follow this structure:

```
profile/
  ├── profile.page.tsx         # Main page component
  ├── profile.schema.ts        # Form validation and types
  ├── profile-form.comp.tsx    # Page-specific components
  ├── profile-stats.comp.tsx   # Page-specific components
  └── index.ts                 # Exports
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

- `.page.tsx` - Page components
- `.layout.tsx` - Layout components
- `.comp.tsx` - Regular components
- `.form.tsx` - Form components
- `.schema.ts` - Form/data schemas
- `.hook.ts` - Custom hooks
- `.context.tsx` - React contexts
- `.service.ts` - Services
- `.util.ts` - Utility functions
- `.type.ts` - TypeScript types/interfaces
- `.test.tsx` - Test files

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
