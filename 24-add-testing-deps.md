++++ main

# Add testing dependencies

To be able to test our application efficiently, we'll install some libraries and add some configuration

1. Install required packages as dev-dependencies:

   ```bash
   npm i -D vitest jsdom @testing-library/react @testing-library/jest-dom
   ```

1. Update your `vite.config.ts`. This will tell vite that we're using vitest.

   ```ts
   // vite.config.ts

   /// <reference types="vitest" />

   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     test: {
       // make testing functions global so we don't need to import them in every test-file
       globals: true,
       // we don't actually render our components in a browser window (this would be way too slow), instead we'll use jsdom
       environment: 'jsdom',
       // tell vitest where our testing setup is located
       setupFiles: './src/setupTests.ts',
     },
   });
   ```

1. Add the referenced `./src/setupTests.ts` file. Here we add some custom functions (so called "matchers") to query our components.

   ```ts
   // src/setupTests.ts

   import '@testing-library/jest-dom/vitest';
   ```

1. Add necessary types to your `tsconfig.json`. This will help TypeScript recognize our global testing functions and matchers.

   ```json
   // tsconfig.json

   {
      "compilerOptions": {
         ...
         "types": ["vitest/globals", "@testing-library/jest-dom"]
      }
   }
   ```

1. Add the testing script to your `package.json`. We need this to start vitest from the command line.

   ```json
   // package.json

   {
      ...
      "scripts": {
         ...
         "test": "vitest",
         "test:coverage": "vitest --coverage"
      }
   }
   ```

1. Add an example test to check if everything works as expected. Create a new file `src/__tests__/App.spec.tsx` for this. (You don't need to understand this code right now, but we'll talk about every line in detail later)

   ```tsx
   import { render, screen } from '@testing-library/react';
   import { MemoryRouter } from 'react-router-dom';
   import App from '../App';

   describe('app', () => {
     it('should display the text "bookmonkey"', () => {
       render(<App />, { wrapper: MemoryRouter });
       expect(screen.getByText(/bookmonkey/i)).toBeInTheDocument();
     });
   });
   ```

   Then run

   ```bash
   npm test
   ```

   If everything is green and says `1 passed` you're good to go! 🎉

1. (Optionally) Install the VS-Code vitest extension. This will enhance your testing experience, but is not strictly necessary.

++++ hints

++++ bonus

++++ trainer-hints
