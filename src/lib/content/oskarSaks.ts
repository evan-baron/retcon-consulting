export const oskarSaks = {
	slug: 'oskar-saks-photo',
	client: 'Oskar Saks Photo',
	url: 'https://www.oskarsaksphoto.com',
	summary:
		'A full redesign for a Denver photography studio, so the site finally lets the photographs lead and makes booking a session effortless.',
	meta: [
		{ label: 'Client', value: 'Oskar Saks Photo' },
		{ label: 'Industry', value: 'Photography' },
		{ label: 'Based in', value: 'Denver, CO' },
		{ label: 'Scope', value: 'Web design, development, and a custom admin dashboard' },
	],
	challenge: [
		'The old site had great photography and very little else going for it. The hero headline and tagline sat straight on a busy snow scene, so the words competed with the picture. Gallery images ran edge to edge with no framing or hierarchy, and the store, cart, and Book Now button gave visitors too many places to go.',
		'The contact page asked for a "Basic," "Intermediate," or "Advanced" service, labels that tell a family nothing about what they are booking.',
	],
	approach: [
		'Keep the photography as the star, and build everything else around it: a calm typographic system, generous space, and a single blue accent pulled from the images themselves.',
	],
	pages: [
		{
			id: 'home',
			label: 'Home',
			title: 'A hero that frames the photo instead of fighting it.',
			before: '/work/oskar-saks-photo/home-before.webp',
			after: '/work/oskar-saks-photo/home-after.webp',
			beforeAlt:
				'Before: the old home page, with a dark headline set directly over a snowy photo of a couple.',
			afterAlt:
				'After: the new home page, where the same photo fades to white beneath a two-tone headline and two buttons.',
			changes: [
				'The full-bleed photo now fades into the page, giving the headline clean space to sit on.',
				'A two-tone serif headline puts the emphasis on the emotional words.',
				'"View the work" and "Book a session" replace a lone Book Now button, one for browsers and one for ready buyers.',
				'A short "Available for travel" badge and a Families / Couples / Events line say who the studio serves.',
				'A soft, slow snowfall drifts across the hero, echoing the winter photograph and keeping the page alive without ever stealing focus.',
			],
		},
		{
			id: 'gallery',
			label: 'Gallery',
			title: 'Galleries that are easy to browse and easy to look at.',
			before: '/work/oskar-saks-photo/gallery-before.webp',
			after: '/work/oskar-saks-photo/gallery-after.webp',
			beforeAlt:
				'Before: the old family gallery, with a plain heading above two large edge-to-edge photos.',
			afterAlt:
				'After: the new family gallery, with a breadcrumb, a large two-tone heading, a view toggle, and rounded photo cards in a grid.',
			changes: [
				'Rounded, evenly spaced cards replace edge-to-edge images, so every photo gets its own frame.',
				'A two- or three-column view toggle lets visitors browse at the density they prefer.',
				'A breadcrumb and "All galleries" link make it clear where you are and how to get back.',
			],
		},
		{
			id: 'contact',
			label: 'Contact',
			title: 'A contact page that sounds like a person wrote it.',
			before: '/work/oskar-saks-photo/contact-before.webp',
			after: '/work/oskar-saks-photo/contact-after.webp',
			beforeAlt:
				'Before: the old contact page, with a form asking for first and last name, email, a service level checkbox, and additional information.',
			afterAlt:
				'After: the new contact page, with a "Let’s create a memory" headline, direct contact details, and a form with a service dropdown and preferred date.',
			changes: [
				'A friendlier headline and a promised reply time set expectations before anyone writes a word.',
				'Email, Instagram, and location sit beside the form for visitors who would rather not fill one out.',
				'A dropdown of real session types, plus optional phone and preferred date, replaces the generic service tiers.',
			],
		},
	],
	admin: {
		eyebrow: '04 · Admin dashboard',
		title: 'Built so every update is his to make.',
		intro:
			'Oskar can change his own copy, galleries, and services whenever he likes, with no developer in the loop and no emails back and forth.',
		items: [
			{
				id: 'copy',
				title: 'Rewrite any page, in plain fields',
				text: 'Each page has its own tab with clearly labeled fields for headlines, taglines, and descriptions. Wrap a word in asterisks and it picks up the blue accent style. Saved changes go live right away.',
				src: '/work/oskar-saks-photo/admin-copy.webp',
				width: 1600,
				height: 1074,
				alt: 'The admin dashboard Home tab, with editable fields for the small line, two-line headline, and tagline of the hero.',
			},
			{
				id: 'gallery',
				title: 'Curate galleries in minutes',
				text: 'Upload new photos, drag to reorder, choose the cover image, write alt text, and select several at once to delete. The public galleries update to match.',
				src: '/work/oskar-saks-photo/admin-gallery.webp',
				width: 1600,
				height: 1199,
				alt: 'The admin dashboard Gallery tab, with an Add photos uploader above a grid of photo cards that each have alt text, title, cover, save, and delete controls.',
			},
			{
				id: 'services',
				title: 'Add, reorder, and price services',
				text: 'Services open in place to edit the title, starting price, description, and what is included. He can reorder them, remove one, or add a new one, and the booking form’s dropdown follows along.',
				src: '/work/oskar-saks-photo/admin-services.webp',
				width: 1600,
				height: 1199,
				alt: 'The admin dashboard Services tab, with the Family Sessions service expanded to show title, starting price, description, and included items, above a list of three more services and an Add a service button.',
			},
		],
	},
	outcome: [
		'The new site reads as the premium, personal studio Oskar runs. It is consistent from first impression to booking form, and it keeps the focus on the photography.',
		'And because he can update his own words, photos, and prices, the site stays current without waiting on anyone.',
	],
} as const;
