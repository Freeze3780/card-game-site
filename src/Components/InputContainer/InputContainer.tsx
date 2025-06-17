import styles from './InputContainer.module.css';

export default function InputContainer({ label, type, placeholder }: { label: string; type: string; placeholder?: string; }) {
	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			<input className={styles.input} type={type} placeholder={typeof placeholder === "string" ? placeholder : label} />
		</div>
	);
}