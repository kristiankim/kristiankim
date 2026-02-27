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
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }, { type: 'quoteBlock' }, { type: 'calloutBlock' }, { type: 'metricsBlock' }, { type: 'galleryBlock' }] }),
  ],
});
