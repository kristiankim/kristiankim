import { defineField, defineType } from 'sanity';

export const quoteBlock = defineType({
  name: 'quoteBlock',
  title: 'Quote block',
  type: 'object',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'cite', title: 'Citation', type: 'string' }),
  ],
});

export const calloutBlock = defineType({
  name: 'calloutBlock',
  title: 'Callout block',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'text', title: 'Text', type: 'text', validation: (r) => r.required() }),
  ],
});

export const metricsBlock = defineType({
  name: 'metricsBlock',
  title: 'Metrics block',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineType({
          name: 'metricItem',
          title: 'Metric item',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'value', title: 'Value', type: 'string' }),
          ],
        }),
      ],
    }),
  ],
});

export const galleryBlock = defineType({
  name: 'galleryBlock',
  title: 'Gallery block',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (r) => r.min(1),
    }),
  ],
});
