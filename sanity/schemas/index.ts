import { author } from './author';
import { post } from './post';
import { project } from './project';
import { calloutBlock, galleryBlock, metricsBlock, quoteBlock } from './blocks';

export const schemaTypes = [
  project,
  post,
  author,
  quoteBlock,
  calloutBlock,
  metricsBlock,
  galleryBlock,
];
