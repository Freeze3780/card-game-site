import A from '../A/A';
import styles from './Card.module.css';

type Props = {
	children: React.ReactNode;
}

type CardProps = {
	children: React.ReactNode;
	goBack?: string;
}


export function Card({ children, goBack }: CardProps) {
	return (
		<div className={styles.card}>
			{children}
			{
				typeof goBack === "string" ?
				<A
					to={goBack}
					text="← Go Back"
				/> 
				: <></>
			}
		</div>
	);
}

export function CardHeader({ children }: Props) {
	return (
		<div className={styles.header}>
			{children}
		</div>
	);
}

export function CardDescription({ children }: Props) {
	return (
		<div className={styles.desc}>
			{children}
		</div>
	);
}

export function CardContent({ children }: Props) {
	return (
		<div className={styles.content}>
			{children}
		</div>
	);
}

export function CardSpacer() {
	return (
		<div className={styles.spacer}></div>
	);
}

export function CardFooter({ children }: Props) {
	return (
		<div className={styles.footer}>
			{children}
		</div>
	);
}