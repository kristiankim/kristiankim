import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '../sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Kristian Kim CMS',
  projectId: 'm63s8wwp',
  dataset: 'production',
  basePath: '/studio',
  plugins: [visionTool()],
  schema: { types: schemaTypes },
});
