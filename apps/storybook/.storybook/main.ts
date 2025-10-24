// apps/storybook/.storybook/main.ts

import type { StorybookConfig } from '@storybook/web-components-vite';
// 💡 NEW IMPORTS: Required for the viteFinal function
import { join, dirname } from "path"
import { mergeConfig, defineConfig } from 'vite'; 

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monoreo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  "stories": [
    "../../../packages/core/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest")
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/web-components-vite'),
    "options": {}
  },

  // 🚀 FIX: The viteFinal function to configure Vite for monorepos
  async viteFinal(config, { configType }) {
    // Merge the existing Storybook/Vite config with our custom settings
    return mergeConfig(config, {
      // CRITICAL FIX: Force Vite to pre-bundle the symlinked tokens package
      optimizeDeps: {
        // Use the exact name of your tokens package (e.g., '@your-org/tokens')
        include: ['@your-org/tokens'], 
      },
    } as defineConfig); // Type casting for TypeScript compatibility
  },
};

export default config;
