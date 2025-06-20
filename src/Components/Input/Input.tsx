import type { ChangeEventHandler } from 'react';
import styles from './Input.module.css';

type props = {
	value: string;
	label: string;
	type: string;
	placeholder?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	ref?: React.Ref<HTMLInputElement>;
	info?: string;
	infoClass?: string;
};

export default function Input({ value, label, type, placeholder, onChange, ref, info, infoClass }: props) {
	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			{
				typeof info === "string" ? <p className={`${styles.info} ${infoClass}`}>{info}</p> : <></>
			}
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