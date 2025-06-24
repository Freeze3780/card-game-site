import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import imgUrl from "../../assets/Icons/person.svg";
import IconButton from '../Buttons/IconButton/IconButton';
import SearchBar from '../SearchBar/SearchBar';

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
			<SearchBar />
			<Link className={styles.link} to={"/account"}>
				<IconButton src={imgUrl} text={username} reverse />
			</Link>
		</header>
	);
}