import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import groq from 'groq';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-02-26';

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanity = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: false })
  : null;

const builder = sanity ? createImageUrlBuilder(sanity) : null;

export const urlFor = (source: unknown) => {
  if (!builder || !source) return null;
  return builder.image(source);
};

export type SanityProject = {
  _id: string;
  title: string;
  slug: { current: string };
  cover?: {
    asset?: { _ref: string; _type: string };
    alt?: string;
  };
  year?: string;
  company?: string;
  website?: string;
  teamMembers?: string[];
  role?: string;
  overview?: string;
  isPrivate?: boolean;
  impact?: string[];
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: { current: string };
  category?: string;
  publishedAt?: string;
  tags?: string[];
  coverImage?: {
    asset?: { _ref: string; _type: string };
    alt?: string;
  };
  body?: Array<Record<string, any>>;
};

export async function getProjects(): Promise<SanityProject[]> {
  if (!sanity) return [];
  return sanity.fetch(
    groq`*[_type == "project"] | order(coalesce(year, "") desc, _createdAt desc){
      _id,title,slug,cover{asset,alt},year,company,website,teamMembers,role,overview,isPrivate,impact
    }`
  );
}

export async function getPosts(): Promise<SanityPost[]> {
  if (!sanity) return [];
  return sanity.fetch(
    groq`*[_type == "post"] | order(publishedAt desc, _createdAt desc){
      _id,title,slug,category,publishedAt,tags,coverImage{asset,alt},body
    }`
  );
}
