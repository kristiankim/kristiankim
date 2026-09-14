import { defineField, defineType } from 'sanity';

export const playground = defineType({
  name: 'playground', title: 'Playground', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'caption', type: 'text', rows: 3, validation: r => r.required() }),
    defineField({ name: 'publishedAt', title: 'Publish date / display order', type: 'datetime', initialValue: () => new Date().toISOString(), validation: r => r.required() }),
    defineField({ name: 'mediaType', type: 'string', initialValue: 'image', options: { list: ['image', 'video'], layout: 'radio' }, validation: r => r.required() }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true }, hidden: ({ document }) => document?.mediaType !== 'image', validation: r => r.custom((value, context) => context.document?.mediaType === 'image' && !(value as { asset?: unknown })?.asset ? 'Upload an image' : true) }),
    defineField({ name: 'video', type: 'file', options: { accept: 'video/mp4,video/webm' }, description: 'Upload a compressed MP4 or WebM.', hidden: ({ document }) => document?.mediaType !== 'video', validation: r => r.custom((value, context) => context.document?.mediaType === 'video' && !(value as { asset?: unknown })?.asset ? 'Upload a video' : true) }),
    defineField({ name: 'poster', title: 'Video thumbnail', type: 'image', hidden: ({ document }) => document?.mediaType !== 'video', validation: r => r.custom((value, context) => context.document?.mediaType === 'video' && !(value as { asset?: unknown })?.asset ? 'Upload a thumbnail' : true) }),
    defineField({ name: 'alt', title: 'Media description for accessibility', type: 'string', validation: r => r.required() }),
    defineField({ name: 'url', title: 'Optional project link', type: 'url', validation: r => r.uri({ scheme: ['https', 'http'] }) }),
  ],
  orderings: [{ title: 'Newest first', name: 'newest', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'mediaType', media: 'image' } },
});
