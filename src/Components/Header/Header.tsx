import styles from './Header.module.css';

type props = {
	className?: string;
}

export default function Header({ className }: props) {
	className = typeof className !== "string" ? "": className
	return (
		<header className={`${styles.header} ${className}`}>
			{/* //TODO */}
			Header
		</header>
	);
}