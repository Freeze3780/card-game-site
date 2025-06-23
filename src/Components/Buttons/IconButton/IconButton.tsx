import styles from './IconButton.module.css';

type Props = {
	src: string;
	text?: string;
	reverse?: boolean;
}

const defaultProps = {
	reverse: false
}

/**
	 * Button Component that has an Icon attached to it
	 * ```ts
	 * type Props = {
		src: string;
		text: string;
		reverse: boolean;
	}
	* ```
	* @param src source of the icon
	* @param text text that is shown next to the icon
	* @param reverse reverses the order of the icon and the text
	* @returns 
*/
export default function IconButton(props: Props) {
	const { src, text, reverse } = {
		...defaultProps,
		...props
	};

	return (
		<button className={`${styles.container}`}>
			{
				reverse 
				?
					<>
						<p className={styles.p}>{text}</p>
						<img className={styles.img} src={src} alt='Icon'/>
					</>
				:
					<>
						<img className={styles.img} src={src} alt='Icon'/>
						<p className={styles.p}>{text}</p>
					</>
				
			}
		</button>
	);
}