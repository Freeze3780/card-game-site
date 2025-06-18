import styles from './InputContainer.module.css';

type props = {
	label: string;
	type: string;
	placeholder?: string;
};

export default function InputContainer({ label, type, placeholder }: props) {
	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			<input className={styles.input} type={type} placeholder={typeof placeholder === "string" ? placeholder : label} />
		</div>
	);
}