# Setting Up Path Aliases in React + Vite Projects

This guide explains how to configure path aliases in a React project using Vite. Path aliases help you write cleaner imports and avoid messy relative paths (../../) in your code.

## What are Path Aliases?

Instead of writing:

```typescript
import { Button } from '../../../components/ui/Button';
```

You can write:

```typescript
import { Button } from '@/components/ui/Button';
```

## Setup Steps

### 1. Configure TypeScript

File: `tsconfig.app.json` (or `tsconfig.json`)

```json
{
  "compilerOptions": {
    // ... other options
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**Why?**

- Tells TypeScript how to resolve path aliases
- Enables code completion and type checking for aliased imports
- `baseUrl: "."` sets the root directory for resolving non-relative imports
- `paths` maps the `@` prefix to the `src` directory

### 2. Configure Vite

File: `vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
```

**Why?**

- Vite needs its own alias configuration for bundling
- Maps `@` to the `src` directory during development and build
- Ensures consistent resolution in both development and production

### 3. Restart Development Server

```bash
# Stop the current dev server and restart it
npm run dev
```

**Why?**

- Configuration changes require a server restart
- Ensures new alias settings are properly loaded

## Usage Examples

```typescript
// Before (messy relative paths)
import { Button } from '../../../components/ui/Button';
import { useAuth } from '../../../../hooks/useAuth';
import { formatDate } from '../../../utils/date';

// After (clean path aliases)
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';
import { formatDate } from '@/utils/date';
```

## Common Issues

1. **Path aliases not working:**

   - Make sure both TypeScript and Vite configs are correct
   - Restart the development server
   - Clear your editor's TypeScript cache

2. **TypeScript errors:**

   - Verify `baseUrl` is set correctly
   - Check that the paths in `tsconfig` match your project structure

3. **Build errors:**
   - Ensure Vite's alias paths match TypeScript's configuration
   - Use absolute paths in Vite's config (`/src` instead of `./src`)

## Benefits

- ✨ Cleaner imports
- 🔄 Easier refactoring
- 📁 Better project organization
- 🚫 No more "../../../" mess
- 💡 Better IDE support

## Additional Tips

- Keep your alias structure simple and intuitive
- Document your path aliases for team members
- Consider using additional aliases for frequently accessed directories
  ```typescript
  // tsconfig.json
  {
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@hooks/*": ["src/hooks/*"]
    }
  }
  ```
