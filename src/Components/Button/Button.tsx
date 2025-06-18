import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type props = {
	to: string;
	children: string;
}

export default function Button({ to, children }: props) {
	return (
		<Link to={to}>
			<button className={styles.button}>{children}</button>
		</Link>
	);
}