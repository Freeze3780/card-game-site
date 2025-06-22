import styles from './PrimaryButton.module.css';

type props = {
	type?: "submit" | "reset" | "button";
	text: string;
}

export default function PrimaryButton({ type, text }: props) {
	type = typeof type !== "string" ? "button" : type;
	return (
		<button type={type} className={styles.button}>{text}</button>
	);
}