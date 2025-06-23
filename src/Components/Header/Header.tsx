import styles from './Header.module.css';
import imgUrl from "../../assets/Icons/person.svg";
import IconButton from '../Buttons/IconButton/IconButton';
import { Link } from 'react-router-dom';

type Props = {
	className: string;
	username: string;
}

const defaultProps = {
	className: "",
	username: ""
};


export default function Header(props: Props) {
	const { className, username } = {
		...defaultProps,
		...props
	};

	return (
		<header className={`${styles.header} ${className}`}>
			<Link className={styles.link} to={"/account"}>
				<IconButton src={imgUrl} text={username} reverse />
			</Link>
		</header>
	);
}