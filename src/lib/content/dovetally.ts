// Dovetally has not launched, so there is deliberately no `url`: the case study shows no live-site link.
export const dovetally = {
	slug: 'dovetally',
	client: 'Dovetally',
	summary:
		'UX consulting for a pre-launch woodworking app. We reworked the landing and pricing pages so visitors see the product first, understand the price, and know where to start.',
	meta: [
		{ label: 'Client', value: 'Dovetally' },
		{ label: 'Industry', value: 'Woodworking software' },
		{ label: 'Status', value: 'Pre-launch' },
		{ label: 'Scope', value: 'UX consulting and landing page redesign' },
	],
	story: {
		title: 'A new kind of tool needs to show itself fast.',
		challenge: [
			'Dovetally turns a project idea into a cut plan, a buy list, and a step-by-step cutting guide. That is hard to picture from a description, and the first landing page leaned on one: a long paragraph under a very large headline, with the product itself starting below the fold.',
			'Pricing was a teaser with no prices, the plans page packed four columns of uppercase text into a single table, and every answer in the FAQ sat open at once.',
		],
		approach: [
			'Keep the dark, workshop-like look and the serif headlines, then fix the structure underneath. Lead with the product, state the benefit in one line, show real prices early, and let people open only the detail they came for.',
		],
	},
	pages: [
		{
			id: 'hero',
			label: 'Home hero',
			title: 'A first screen that shows the product, not only the promise.',
			before: '/work/dovetally/home-before.webp',
			after: '/work/dovetally/home-after.webp',
			beforeAlt:
				'Before: the old home page, with a very large two-tone headline, a long paragraph, and a single button. The cut plan only begins at the bottom edge of the screen.',
			afterAlt:
				'After: the new home page, with a shorter headline on the left and a cut plan card on the right showing a bookcase laid out on a 4 by 8 sheet, with project, stock, parts, and what to buy listed beneath.',
			changes: [
				'The cut plan now sits beside the headline, so visitors see what the product makes without scrolling.',
				'The headline leads with the benefit: build the piece you have in mind from the lumber you already own.',
				'A long paragraph becomes one line: plan every cut from your rack first, and buy only what is left.',
				'A summary under the plan names the project, the stock, the parts placed, and what is left to buy.',
				'A "See how it works" link sits beside the main button, and the duplicate button leaves the header, so there is one clear next step.',
				'A ruler and a faint grid along the edges give the page a drafting-table feel.',
			],
		},
		{
			id: 'how-it-works',
			label: 'How it works',
			title: 'Three features, one place to explore them.',
			before: '/work/dovetally/how-before.webp',
			after: '/work/dovetally/how-after.webp',
			beforeAlt:
				'Before: a long feature section numbered 02, with a large headline and a three-item checklist beside a cut planner panel, and the next section starting right below.',
			afterAlt:
				'After: a section headed Measure twice, cut once, with tabs for Cut planner, 3D model, and Cutting guide above the cut planner panel and a short paragraph beside it.',
			changes: [
				'A tab bar for Cut planner, 3D model, and Cutting guide replaces a run of long, stacked sections.',
				'A single heading, "Measure twice, cut once," explains the order: check the layout, check the model, then cut with the guide.',
				'A short paragraph replaces the checklist, saying plainly that parts pack onto the stock you own first and only the rest goes on the buy list.',
				'Panel labels switch from monospace capitals to plain text, so the product views read as the focus.',
				'"Try a sample project" stays under every tab, so the next step is always in view.',
			],
		},
		{
			id: 'agents',
			label: 'Agents',
			title: 'Connecting an agent, laid out in order.',
			before: '/work/dovetally/agents-before.webp',
			after: '/work/dovetally/agents-after.webp',
			beforeAlt:
				'Before: the agent section, stretched across a wide layout with the intro in a far right column, an example chat on the left, and steps with small monospace labels on the right.',
			afterAlt:
				'After: the same section in a narrower column, with the heading and intro stacked at the left, an example chat beside three steps numbered 1, 2, and 3, and a code sample for Claude Code.',
			changes: [
				'The heading and its intro now sit together instead of being split across the width of the page.',
				'The section uses the same column width as the rest of the page, so it no longer stretches on large screens.',
				'Steps carry plain numerals, 1 through 3, in place of small monospace labels, so the order is clear.',
				'The example conversation stays beside the steps, so visitors see what an agent does before they set one up.',
			],
		},
		{
			id: 'home-pricing',
			label: 'Home pricing',
			title: 'Real prices, right on the home page.',
			before: '/work/dovetally/home-pricing-before.webp',
			after: '/work/dovetally/home-pricing-after.webp',
			beforeAlt:
				'Before: a Start free section with two cards, Free and Personal, each with a short checklist and a See plans link. No prices appear.',
			afterAlt:
				'After: a Start free section with three cards, Free at $0, Personal at $12 a month, and Small shop at $30 a month marked Coming soon, each with a short description and a button, above the start of a comparison table.',
			changes: [
				'Prices now appear on the cards: $0, $12 a month, and $30 a month, with the yearly price and the 33% saving underneath.',
				'A third card, Small shop, appears with a "Coming soon" tag, so visitors see the whole range.',
				'A short description replaces each checklist, with no "No generation from a prompt" line to dwell on what a plan lacks.',
				'Buttons say where they lead: "Try a sample project" for Free and "See Personal on the plans page" for Personal.',
				'A side-by-side comparison begins just below the cards, so the answer to "what do I get?" is one scroll away.',
			],
		},
		{
			id: 'closing',
			label: 'Closing',
			title: 'A closing line with a joint to match.',
			before: '/work/dovetally/cta-before.webp',
			after: '/work/dovetally/cta-after.webp',
			beforeAlt:
				'Before: a centered closing section with the headline Less figuring. More making., a Try a sample project button, and a Keep me posted email form below it.',
			afterAlt:
				'After: a left-aligned closing section with a two-tone Less figuring. More making. headline beside a line drawing of a dovetail joint, a Try a sample project button, and an email form with a visible label and a Subscribe button.',
			changes: [
				'The second half of the headline takes the accent color, matching the hero.',
				'A line drawing of a dovetail joint ties the page back to the name.',
				'The email field gains a visible "Email address" label, and its button reads "Subscribe."',
				'The layout aligns left with the rest of the page, and a thin rule separates the main action from the newsletter.',
			],
		},
		{
			id: 'plans',
			label: 'Plans',
			title: 'Small fixes that make three prices easy to compare.',
			before: '/work/dovetally/plans-before.webp',
			after: '/work/dovetally/plans-after.webp',
			beforeAlt:
				'Before: the old plans page, with a header showing only Plans and Sign in, a Monthly and Yearly toggle, and three plan cards. A line about the Custom plan is squeezed beneath them.',
			afterAlt:
				'After: the new plans page, with the full site header, a Monthly and Annually toggle showing 33% off, and three plan cards with matching layouts and aligned buttons, above the start of a Compare section.',
			changes: [
				'At full size the page looks much the same. The gains are in details that decide whether three prices can be compared at a glance, and the next two comparisons zoom in on them.',
				'The header now matches the home page, adding How it works and Agents, so visitors can move around without going back.',
			],
		},
		{
			id: 'plans-prices',
			label: 'Toggle and prices',
			title: 'Prices that follow the same rules.',
			before: '/work/dovetally/plans-top-before.webp',
			after: '/work/dovetally/plans-top-after.webp',
			beforeAlt:
				'Before, zoomed in: a Monthly and Yearly toggle with Yearly in a reddish tint, above a Personal card at $8 a month billed $96 a year and a Small shop card at $29 a month with no billing line.',
			afterAlt:
				'After, zoomed in: a rounded Monthly and Annually toggle with Annually in an amber tint and 33% off, above a Personal card at $8 a month billed $96 a year and a Small shop card at $20 a month billed $240 a year.',
			changes: [
				'Small shop now says "billed $240 a year," the same way Personal does. Before, only Personal had a yearly line, so visitors had to guess which basis each price used.',
				'The toggle reads "Annually (33% off)" instead of "Yearly · 4 months free." A percentage is easy to check against the prices, where "months free" makes people do the math.',
				'The selected option moves from a reddish tint to the accent color. Red tends to read as a warning, and the accent color matches the rest of the site.',
				'The toggle is a larger, rounded control, which makes it easier to see and to tap.',
			],
		},
		{
			id: 'plans-alignment',
			label: 'Alignment and Custom',
			title: 'Cards that line up, and a line that no longer contradicts itself.',
			before: '/work/dovetally/plans-bottom-before.webp',
			after: '/work/dovetally/plans-bottom-after.webp',
			beforeAlt:
				'Before, zoomed in: Free and Personal cards whose feature lists start at different heights, with uneven gaps between items, a heavy double border on Personal, and a Custom line squeezed beneath that says From $99/month and Not offered on this shop.',
			afterAlt:
				'After, zoomed in: Free and Personal cards whose feature lists start at the same height with even spacing and buttons side by side, a thin outline on Personal, and open space beneath leading to a Compare heading.',
			changes: [
				'Feature lists, descriptions, and buttons now start and end at the same heights on every card. Before, Personal’s list began higher than Free’s, so reading across a row meant hunting for it.',
				'Spacing between list items is even. It used to vary with line wraps, which made some features look more important than others.',
				'Personal’s "Most popular" highlight is a thin accent outline. The old heavy double border looked like a selected state and pushed the card out of line with its neighbors.',
				'The Custom line leaves the space under the cards. It used to say "From $99/month" and "Not offered on this shop" in one sentence, and it now has a card of its own further down.',
			],
		},
		{
			id: 'compare',
			label: 'Compare',
			title: 'A comparison table that scans.',
			before: '/work/dovetally/compare-before.webp',
			after: '/work/dovetally/compare-after.webp',
			beforeAlt:
				'Before: a four-column comparison table with uppercase row labels, plan headers crowded with prices and taglines, and Not included written out in cells.',
			afterAlt:
				'After: a Compare section with a three-column table for Free, Personal, and Small shop, with sentence-case row labels, grouped sections named Per month, Shop, and Generation, and accent-colored checks.',
			changes: [
				'The table drops to the three plans people choose between. Custom moves to its own card, and prices stay on the cards above.',
				'Row labels use sentence case instead of all capitals, and plan names get clean, uncluttered headers.',
				'Rows group under labeled sections, Per month, Shop, and Generation, with a chevron to collapse each one.',
				'A simple dash replaces the words "Not included," and the checks take the accent color, so gaps between plans stand out.',
				'A one-line intro says what the table covers, including what is still to come.',
			],
		},
		{
			id: 'faq',
			label: 'Questions',
			title: 'Answers that wait until you ask.',
			before: '/work/dovetally/faq-before.webp',
			after: '/work/dovetally/faq-after.webp',
			beforeAlt:
				'Before: a Questions section where every answer is open, forming a long column of text under each question.',
			afterAlt:
				'After: a Custom plan card above a large Questions heading, with five questions collapsed in a list and a line inviting visitors to get in touch.',
			changes: [
				'Five questions collapse into a short list, where before every answer was open at once.',
				'Visitors open only the question they came with, and the page stays short.',
				'A larger heading and a line inviting people to get in touch cover the question the list does not.',
				'The Custom plan has a card of its own just above, so it no longer interrupts the table.',
			],
		},
	],
	outcome: {
		title: 'A landing page ready for launch day.',
		paragraphs: [
			'Dovetally has not launched yet, so there are no visitor numbers to share. What exists is a page that says what the product does in one line, shows a real cut plan above the fold, and states its prices before anyone asks.',
			'The pricing pages now compare three plans on one clear table, and the FAQ opens only what a visitor needs. When Dovetally goes live, visitors will arrive at a page that leads with the product and tells them where to start.',
		],
	},
} as const;
