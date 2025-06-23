import styles from './Header.module.css';
import imgUrl from "../../assets/Icons/person.svg";

type Props = {
	className: string;
	username: string;
}

const defaultProps = {
	className: "",
	username: ""
};

export default function Header(props: Props) {
	const { className, username }: Props = {
		...defaultProps,
		...props
	}
	return (
		<header className={`${styles.header} ${className}`}>
			<p>{username}</p>
			<img src={imgUrl} alt='User Icon'/>
		</header>
	);
}