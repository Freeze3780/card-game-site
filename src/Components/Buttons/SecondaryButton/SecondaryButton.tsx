import styles from './SecondaryButton.module.css';

type Props = {
	type?: "submit" | "reset" | "button";
	text: string;
}

const defaultProps: {
	 type: "submit" | "reset" | "button" 
} = {
	type: "button",
}

export default function SecondaryButton(props: Props) {
	const { type, text } = {
		...defaultProps,
		...props
	};
	
	return (
		<button type={type} className={styles.button}>{text}</button>
	);
}