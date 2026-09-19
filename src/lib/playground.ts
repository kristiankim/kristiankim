import { playgroundItems, type PlaygroundItem } from '../data/playground';
import { sanity } from './sanity';

export async function getPlayground(): Promise<PlaygroundItem[]> {
  // Explicit source selection means unpublishing the last CMS item stays empty.
  if (import.meta.env.PLAYGROUND_SOURCE === 'sanity') {
    if (!sanity) throw new Error('PLAYGROUND_SOURCE=sanity requires PUBLIC_SANITY_PROJECT_ID');
    return sanity.fetch<PlaygroundItem[]>(`*[_type == "playground" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc, _id asc) {
      "slug": slug.current, title, caption, publishedAt, mediaType, alt, url,
      "src": select(mediaType == "interactive" => demoUrl, mediaType == "video" => video.asset->url, image.asset->url),
      "thumbnail": select(mediaType in ["video", "interactive"] => poster.asset->url, image.asset->url)
    }`, {}, { perspective: 'published' });
  }
  return playgroundItems.filter(item => new Date(item.publishedAt).getTime() <= Date.now())
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
