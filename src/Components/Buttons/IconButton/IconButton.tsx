import styles from './IconButton.module.css';

type Props = {
	src: string;
	text?: string;
	align: "normal" | "reverse";
}

export default function IconButton({ src, text, align = "normal" }: Props) {
	return (
		<button className={styles.container}>
			<p className={styles.p}>{text}</p>
			<img className={styles.img} src={src} alt='Icon'/>
		</button>
	);
}