import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'cover', title: 'Cover', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'website', title: 'Website', type: 'url' }),
    defineField({ name: 'teamMembers', title: 'Team members', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 4 }),
    defineField({ name: 'body', title: 'Case study', type: 'array', of: [{ type: 'block' }, { type: 'image' }, { type: 'quoteBlock' }, { type: 'calloutBlock' }, { type: 'metricsBlock' }, { type: 'galleryBlock' }] }),
    defineField({ name: 'impact', title: 'Outcome / impact metrics', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'isPrivate', title: 'Private', type: 'boolean', initialValue: false }),
    defineField({ name: 'password', title: 'Password (future lock)', type: 'string', hidden: ({ parent }) => !parent?.isPrivate }),
  ],
});
