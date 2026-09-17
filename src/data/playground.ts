import { playground as existingItems } from './content';

export type PlaygroundItem = {
  slug: string;
  title: string;
  caption: string;
  publishedAt: string;
  mediaType: 'image' | 'video';
  src: string;
  thumbnail: string;
  alt: string;
  url?: string;
};

// Edit these entries through Codex. Dates control newest-first ordering.
// For videos, src is an MP4 and thumbnail is its poster image.
export const playgroundItems: PlaygroundItem[] = [
  {
    slug: 'hold-to-delete',
    title: 'Hold to delete',
    caption:
      'A press-and-hold confirmation makes a destructive action feel intentional, using visible progress before the deletion is committed.',
    publishedAt: '2026-09-17',
    mediaType: 'video',
    src: '/videos/hold-to-delete.mp4',
    thumbnail: '/images/playground/hold-to-delete-cover.png',
    alt: 'Hold-to-delete confirmation interaction for permanently deleting a file',
  },
  {
    slug: 'send-a-payment-form',
    title: 'Send a payment form',
    caption:
      'A focused payment flow that brings the recipient, funding account, delivery method, amount, and schedule into one clear form.',
    publishedAt: '2026-09-15',
    mediaType: 'image',
    src: '/images/playground/send-a-payment-form.png',
    thumbnail: '/images/playground/send-a-payment-form.png',
    alt: 'Send a payment form with recipient, account, payment method, amount, and schedule fields',
  },
  {
    slug: 'banking-widgets',
    title: 'Banking widgets',
    caption: 'An exploration of banking widgets in motion.',
    publishedAt: '2026-09-14',
    mediaType: 'video',
    src: '/remotion/banking-widgets-animation.mp4',
    thumbnail: '/remotion/banking-widgets.png',
    alt: 'Animated banking interface widgets',
  },
  ...existingItems.map((item, index) => ({
    ...item,
    publishedAt: `2026-09-${String(13 - index).padStart(2, '0')}`,
    mediaType: 'image' as const,
    src: item.thumb,
    thumbnail: item.thumb,
    alt: `${item.title} interface`,
  })),
];
