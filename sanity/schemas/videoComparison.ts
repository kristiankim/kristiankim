import { defineField, defineType } from 'sanity';

export const videoComparison = defineType({
  name: 'videoComparison',
  title: 'Before / After video',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Interaction name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'beforeSrc', title: 'Before video URL', description: 'An MP4 URL or a site path starting with /videos/.', type: 'string', validation: r => r.required() }),
    defineField({ name: 'afterSrc', title: 'After video URL', description: 'An MP4 URL or a site path starting with /videos/.', type: 'string', validation: r => r.required() }),
    defineField({ name: 'poster', title: 'After cover image URL', type: 'string' }),
    defineField({ name: 'caption', title: 'Caption', type: 'text', rows: 2 }),
    defineField({ name: 'aspectRatio', title: 'Video aspect ratio', type: 'string', initialValue: '2008 / 1080' }),
  ],
  preview: { select: { title: 'title' }, prepare: ({ title }) => ({ title, subtitle: 'Before / After video' }) },
});
