import styles from './Sidebar.module.css';

type Props = {
	className?: string;
}

const defaultProps = {
	className: ""
};

export default function Sidebar(props: Props) {
	const { className } = {
		...defaultProps,
		...props
	};

	return (
		<aside className={`${styles.sidebar} ${className}`}>
			{/* //TODO */}
			Sidebar
		</aside>
	);
}