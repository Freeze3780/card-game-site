import styles from './Button.module.css';

type props = {
	children: string;
}

export default function Button({ children }: props) {
	return (
		<button className={styles.button}>{children}</button>
	);
}