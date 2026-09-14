import { author } from './author';
import { playground } from './playground';
import { post } from './post';
import { project } from './project';
import { calloutBlock, galleryBlock, metricsBlock, quoteBlock } from './blocks';

export const schemaTypes = [
  playground,
  project,
  post,
  author,
  quoteBlock,
  calloutBlock,
  metricsBlock,
  galleryBlock,
];
