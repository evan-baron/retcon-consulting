/* Neutral spot illustrations: ink line work, warm-gray fills, one blue accent. */

const line = {
	stroke: 'var(--text)',
	strokeWidth: 2,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
} as const;

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
	return (
		<svg viewBox='0 0 320 200' role='img' aria-label={label} focusable='false'>
			<defs>
				<pattern id='ill-dots' width='16' height='16' patternUnits='userSpaceOnUse'>
					<circle cx='2' cy='2' r='1.1' fill='var(--border-strong)' />
				</pattern>
			</defs>
			<rect width='320' height='200' fill='url(#ill-dots)' opacity='0.7' />
			{children}
		</svg>
	);
}

export function ConsultingArt() {
	return (
		<Frame label='A compass between two conversation bubbles'>
			<circle cx='160' cy='100' r='64' fill='var(--white)' {...line} />
			<circle cx='160' cy='100' r='52' fill='none' {...line} strokeWidth={1} strokeDasharray='2 6' />
			{Array.from({ length: 12 }, (_, i) => {
				const a = (i * Math.PI) / 6;
				return (
					<line
						key={i}
						x1={160 + 52 * Math.sin(a)}
						y1={100 - 52 * Math.cos(a)}
						x2={160 + (i % 3 === 0 ? 44 : 48) * Math.sin(a)}
						y2={100 - (i % 3 === 0 ? 44 : 48) * Math.cos(a)}
						{...line}
						strokeWidth={1.5}
					/>
				);
			})}
			<g transform='rotate(40 160 100)'>
				<path d='M160 58 L171 100 L149 100 Z' fill='var(--accent)' {...line} stroke='var(--accent)' />
				<path d='M160 142 L171 100 L149 100 Z' fill='var(--bg-subtle)' {...line} />
			</g>
			<circle cx='160' cy='100' r='4.5' fill='var(--text)' />
			<g>
				{/* One continuous outline so the bottom edge opens into the tail */}
				<path
					d='M40 38 H92 Q102 38 102 48 V70 Q102 80 92 80 H60 L40 92 L48 80 H40 Q30 80 30 70 V48 Q30 38 40 38 Z'
					fill='var(--white)'
					{...line}
				/>
				<line x1='42' y1='54' x2='88' y2='54' {...line} strokeWidth={1.5} />
				<line x1='42' y1='64' x2='70' y2='64' {...line} strokeWidth={1.5} stroke='var(--text-faint)' />
			</g>
			<g>
				<path
					d='M232 118 H284 Q294 118 294 128 V150 Q294 160 284 160 H272 L280 172 L260 160 H232 Q222 160 222 150 V128 Q222 118 232 118 Z'
					fill='var(--bg-subtle)'
					{...line}
				/>
				<circle cx='244' cy='139' r='3' fill='var(--text)' />
				<circle cx='258' cy='139' r='3' fill='var(--text)' />
				<circle cx='272' cy='139' r='3' fill='var(--accent)' />
			</g>
		</Frame>
	);
}

export function DevelopmentArt() {
	return (
		<Frame label='A code editor window'>
			<defs>
				<clipPath id='dev-window-clip'>
					<rect x='44' y='28' width='232' height='148' rx='12' />
				</clipPath>
			</defs>
			<rect x='44' y='28' width='232' height='148' rx='12' fill='var(--white)' />
			{/* Sidebar is clipped to the window's rounded shape so it can't cover the outline */}
			<rect x='44' y='54' width='52' height='122' fill='var(--bg-subtle)' clipPath='url(#dev-window-clip)' />
			<line x1='96' y1='54' x2='96' y2='176' {...line} strokeWidth={1} />
			<line x1='44' y1='54' x2='276' y2='54' {...line} />
			<circle cx='60' cy='41' r='4' fill='var(--border-strong)' />
			<circle cx='74' cy='41' r='4' fill='var(--border-strong)' />
			<circle cx='88' cy='41' r='4' fill='var(--border-strong)' />
			{/* Outline drawn last so it always sits on top */}
			<rect x='44' y='28' width='232' height='148' rx='12' fill='none' {...line} />
			{[72, 88, 104, 120].map((y) => (
				<rect key={y} x='54' y={y} width={y % 32 === 8 ? 28 : 20} height='5' rx='2.5' fill='var(--border-strong)' />
			))}
			<g>
				<rect x='110' y='72' width='38' height='6' rx='3' fill='var(--accent)' />
				<rect x='154' y='72' width='54' height='6' rx='3' fill='var(--text)' />
				<rect x='122' y='88' width='64' height='6' rx='3' fill='var(--text-faint)' />
				<rect x='122' y='104' width='44' height='6' rx='3' fill='var(--accent)' opacity='0.55' />
				<rect x='172' y='104' width='60' height='6' rx='3' fill='var(--text-faint)' />
				<rect x='122' y='120' width='84' height='6' rx='3' fill='var(--text-faint)' />
				<rect x='110' y='136' width='28' height='6' rx='3' fill='var(--text)' />
				<rect x='110' y='152' width='7' height='12' rx='1.5' fill='var(--accent)' />
			</g>
		</Frame>
	);
}

export function DesignArt() {
	return (
		<Frame label='A bezier curve with anchor points and color swatches'>
			<rect x='34' y='24' width='252' height='152' rx='14' fill='var(--white)' {...line} />
			<path d='M60 138 C 96 36, 148 36, 168 94 S 238 150, 262 62' fill='none' {...line} stroke='var(--accent)' strokeWidth={3} />
			<g stroke='var(--text)' strokeWidth={1.4} strokeLinecap='round' opacity='0.7'>
				<line x1='60' y1='138' x2='96' y2='36' />
				<line x1='148' y1='36' x2='168' y2='94' />
				<line x1='168' y1='94' x2='204' y2='146' />
				<line x1='238' y1='150' x2='262' y2='62' />
			</g>
			{[
				[96, 36],
				[148, 36],
				[204, 146],
				[238, 150],
			].map(([x, y]) => (
				<circle key={`${x}${y}`} cx={x} cy={y} r='4.5' fill='var(--white)' {...line} strokeWidth={1.6} />
			))}
			{[
				[60, 138],
				[168, 94],
				[262, 62],
			].map(([x, y]) => (
				<rect key={`${x}${y}`} x={x - 5} y={y - 5} width='10' height='10' fill='var(--text)' />
			))}
			<g>
				<circle cx='60' cy='160' r='8' fill='var(--text)' />
				<circle cx='82' cy='160' r='8' fill='var(--text-faint)' />
				<circle cx='104' cy='160' r='8' fill='var(--border-strong)' />
				<circle cx='126' cy='160' r='8' fill='var(--accent)' />
			</g>
		</Frame>
	);
}
