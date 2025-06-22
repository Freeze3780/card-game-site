import styles from './SecondaryButton.module.css';

type props = {
	type?: "submit" | "reset" | "button";
	text: string;
}

export default function SecondaryButton({ type, text }: props) {
	type = typeof type !== "string" ? "button" : type;
	return (
		<button type={type} className={styles.button}>{text}</button>
	);
}