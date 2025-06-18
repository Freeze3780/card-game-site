import { Link } from 'react-router-dom';
import styles from './A.module.css';

type props = {
	to: string;
	text: string;
}

export default function A({ to, text }: props) {
	return (
		<Link className={styles.link} to={to}>{text}</Link>
	);
}