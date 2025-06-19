// import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type props = {
	children: string;
}

export default function Button({ children }: props) {
	return (
		<button type='submit' className={styles.button}>{children}</button>
	);
}