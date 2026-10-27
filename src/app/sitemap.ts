import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

// No lastModified: stamping every URL with "now" on each build would tell crawlers the whole site
// changes constantly. Add a real date per page only when it's tracked.
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: `${site.url}/`, changeFrequency: 'monthly', priority: 1 },
		{ url: `${site.url}/development`, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${site.url}/work/oskar-saks-photo`, changeFrequency: 'yearly', priority: 0.7 },
		{ url: `${site.url}/work/spoke-and-circle`, changeFrequency: 'yearly', priority: 0.7 },
		{ url: `${site.url}/contact`, changeFrequency: 'yearly', priority: 0.6 },
	];
}
