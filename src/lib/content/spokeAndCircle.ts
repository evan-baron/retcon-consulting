export const spokeAndCircle = {
	slug: 'spoke-and-circle',
	client: 'Spoke & Circle',
	url: 'https://spokeandcircle.com',
	summary:
		'A redesign of a cycling-group directory, taking a plain prototype to a searchable guide that helps riders find the team, club, or group ride that fits them.',
	meta: [
		{ label: 'Client', value: 'Spoke & Circle' },
		{ label: 'Industry', value: 'Cycling community' },
		{ label: 'Platform', value: 'Web app' },
		{ label: 'Scope', value: 'Product design and web development' },
	],
	story: {
		title: 'A directory should feel like the rides it lists.',
		challenge: [
			'The first version did the job on paper. It searched a small set of sample teams, but it looked like a prototype: monospace labels, boxed panels, and a dark header that said nothing about cycling. Visitors could filter by keyword, location, and type, and little else.',
			'Team pages packed every detail into the same dense blocks, with placeholder contact information and no clear next step for someone who wanted to join.',
		],
		approach: [
			'Give the product the energy of a group ride: a warm sunset gradient, rounded cards, and one friendly type family. Then make every page answer the question a rider is actually asking, from "what is this?" to "can I join?"',
		],
	},
	pages: [
		{
			id: 'home',
			label: 'Home',
			title: 'A first screen that says what it is, and feels like riding.',
			before: '/work/spoke-and-circle/home-before.webp',
			after: '/work/spoke-and-circle/home-after.webp',
			beforeAlt:
				'Before: the old home page, with a black header, a serif headline on an off-white background, and a boxed search form.',
			afterAlt:
				'After: the new home page, with a plum header, a sunset gradient behind a headline that names cycling clubs, teams, and group rides, and a search card with a team or group ride toggle.',
			changes: [
				'The headline now names exactly what visitors can find: cycling clubs, teams, and group rides.',
				'A sunset gradient and soft bike-part shapes replace the flat background, so the page feels like cycling from the first second.',
				'One toggle switches the search between teams and clubs or group rides, so each rider starts in the right place.',
				'A "30-second quiz" link catches visitors who are not sure where to start, and the header gains About, Browse, Log in, and Get Started.',
			],
		},
		{
			id: 'search',
			label: 'Search',
			title: 'Search that narrows as far as a rider needs.',
			before: '/work/spoke-and-circle/search-before.webp',
			after: '/work/spoke-and-circle/search-after.webp',
			beforeAlt:
				'Before: the old search results page, with a single row of filters above a table of sample teams.',
			afterAlt:
				'After: the new Browse page, with two rows of filters above a table of cycling teams with colored pills for type, pace, and a verified status.',
			changes: [
				'Distance, skill level, competitive or recreational, and racing discipline join keyword, location, group type, and bike type.',
				'Colored pills make type, riding pace, and status readable at a glance down a long table.',
				'A "Verified" status on every row shows which listings have been checked this year.',
				'Results grow from a small set of samples to a full list of real groups, with a Clear all link to reset in one click.',
			],
		},
		{
			id: 'team',
			label: 'Team page',
			title: 'Profiles built to answer "can I join?"',
			before: '/work/spoke-and-circle/team-before.webp',
			after: '/work/spoke-and-circle/team-after.webp',
			beforeAlt:
				'Before: the old team page for a sample team, with bordered boxes for how to join, quick facts, and ride profile.',
			afterAlt:
				'After: the new team page for a real downhill mountain biking team, with a verified badge, the full mission statement, a highlighted How to join card with a Contact team button, and soft rounded sections.',
			changes: [
				'"How to join" moves into a highlighted card with a single, obvious Contact team button.',
				'Type, discipline, and a Verified badge sit above the name, so credibility comes before the details.',
				'The full mission statement gets room to breathe, and the facts below group into clearly labeled sections.',
				'Real listings replace the placeholder names and example email addresses from the prototype.',
				'Teams can show off their own photos, from a big group shot to everyday rides, so a rider sees the people before reaching out.',
				'Contact details, website, and social links are real, tappable links instead of plain text.',
			],
			extras: [
				{
					src: '/work/spoke-and-circle/team-photos.webp',
					alt: 'The team page further down: a How to join card marked Open to all, a Quick facts card with linked email, website, and social accounts, and a Photos section with a large group photo of mountain bikers on a rocky overlook above three smaller ride photos.',
					caption: 'Further down the same page: linked contact details and a team photo gallery.',
				},
			],
		},
		{
			id: 'submit',
			label: 'Submit a team',
			title: 'A long form, turned into a short ride.',
			before: '/work/spoke-and-circle/submit-before.webp',
			after: '/work/spoke-and-circle/submit-after.webp',
			beforeAlt:
				'Before: the old submit form, a single long bordered panel of fields starting with name, type, and mission statement.',
			afterAlt:
				'After: the new submit form, with a four-stop route line showing Generic info, Group profile, Group structure, and Tags and media, above the first step of fields.',
			changes: [
				'The form splits into four steps along a route line, with a cyclist riding toward a finish flag.',
				'Required fields are marked, and the mission statement shows how many characters remain.',
				'Affiliation and location suggest matches as people type, so groups link to what already exists.',
			],
		},
		{
			id: 'about',
			label: 'About',
			title: 'A new About page that tells the story behind the product.',
			after: '/work/spoke-and-circle/about-after.webp',
			afterAlt:
				'The new About page, with a sunset gradient banner reading Every cyclist deserves a circle to ride with, above a section titled Great rides shouldn’t be a secret that explains why the directory exists.',
			changes: [
				'The prototype had no About page. This one opens with a clear promise: every cyclist deserves a circle to ride with.',
				'It explains the problem in plain words: good groups exist in almost every town, but they are hard to find and easy to give up on.',
				'It carries the same gradient banner and type as the rest of the site, so the story feels like part of the product.',
			],
		},
	],
	outcome: {
		title: 'A directory riders can trust at a glance.',
		paragraphs: [
			'Spoke & Circle now looks like the community it serves and works like a real directory. Riders can search with as much precision as they want, compare groups quickly, and see how to join.',
			'A new About page tells riders why the directory exists, and team profiles now carry real photos and links. The submit flow gives group leaders a clear path to get listed, and the verified status gives riders a reason to believe what they read.',
		],
	},
} as const;
