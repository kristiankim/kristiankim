import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', initialValue: 'Thoughts' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt text', type: 'string' }] }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        },
        { type: 'quoteBlock' },
        { type: 'calloutBlock' },
        { type: 'metricsBlock' },
        { type: 'galleryBlock' },
        { type: 'videoComparison' },
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Code block',
          fields: [
            { name: 'code', title: 'Code', type: 'text', rows: 8, validation: (r) => r.required() },
            { name: 'language', title: 'Language', type: 'string', initialValue: 'css' },
          ],
          preview: { select: { title: 'language' }, prepare: ({ title }) => ({ title: `${title || 'Code'} snippet` }) },
        },
      ],
    }),
  ],
});
