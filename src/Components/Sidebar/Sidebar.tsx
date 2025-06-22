import styles from './Sidebar.module.css';

type props = {
	className?: string;
}

export default function Sidebar({ className }: props) {
	className = typeof className !== "string" ? "": className
	return (
		<aside className={`${styles.sidebar} ${className}`}>
			{/* //TODO */}
			Sidebar
		</aside>
	);
}