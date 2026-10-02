import Link from 'next/link';
import type { ComponentProps } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './button.module.scss';

type Variant = 'primary' | 'secondary';

type Props = {
	variant?: Variant;
	href?: string;
	className?: string;
	arrow?: boolean;
} & Omit<ComponentProps<'button'>, 'className'>;

export default function Button({
	variant = 'primary',
	href,
	className,
	arrow = false,
	children,
	...rest
}: Props) {
	const classes = [styles.button, styles[variant], className]
		.filter(Boolean)
		.join(' ');

	const content = (
		<>
			<span>{children}</span>
			{arrow && <ArrowRight size={16} aria-hidden='true' />}
		</>
	);

	if (href) {
		return (
			<Link href={href} className={classes}>
				{content}
			</Link>
		);
	}

	return (
		<button className={classes} {...rest}>
			{content}
		</button>
	);
}
