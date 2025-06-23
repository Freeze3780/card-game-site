import type { ChangeEventHandler } from 'react';
import styles from './Input.module.css';

type Props = {
	value: string;
	label: string;
	type: string;
	placeholder?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	ref?: React.Ref<HTMLInputElement>;
	info?: string;
	infoClass?: string;
};

const defaultProps = {

};

/**
	* Input Component.
		* @param value string
		* @param label string
		* @param type string
		* @param placeholder(Optional) string
		* @param onChange(Optional) ChangeEventHandler<HTMLInputElement>
		* @param ref(Optional) React.Ref<HTMLInputElement>
		* @param info(Optional) string
		* @param infoClass(Optional) string
	* @returns div>(label + input)
*/
export default function Input(props: Props) {
	const { value, label, type, placeholder, onChange, ref, info, infoClass }: Props = {
		...defaultProps,
		...props
	};

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