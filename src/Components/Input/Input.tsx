import type { ChangeEventHandler } from 'react';
import styles from './Input.module.css';

type props = {
	value: string;
	label: string;
	type: string;
	placeholder?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	ref?: React.Ref<HTMLInputElement> 
};

export default function Input({ value, label, type, placeholder, onChange, ref }: props) {
	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			<input
				value={value}
				className={styles.input}
				type={type} 
				placeholder={typeof placeholder === "string" ? placeholder : label} 
				onChange={onChange}
				ref={ref}
			/>
		</div>
	);
}