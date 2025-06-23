import styles from './PrimaryButton.module.css';

type Props = {
	type: "submit" | "reset" | "button";
	text: string;
}

const defaultProps = {
	type: "button",
}

export default function PrimaryButton(props: Props) {
	const { type, text }: Props = {
		...defaultProps,
		...props
	};
	
	return (
		<button type={type} className={styles.button}>{text}</button>
	);
}