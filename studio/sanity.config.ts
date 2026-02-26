import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '../sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Kristian Kim CMS',
  projectId: 'm63s8wwp',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
