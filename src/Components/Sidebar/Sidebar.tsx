import styles from './Sidebar.module.css';
import IconButton from '../Buttons/IconButton/IconButton';

import hamburgerUrl from "../../assets/Icons/hamburger.svg";
import houseUrl from "../../assets/Icons/house.svg";
import cogUrl from "../../assets/Icons/cog.svg";


type Props = {
	className?: string;
}

const defaultProps = {
	className: ""
};

export default function Sidebar(props: Props) {
	const { className } = {
		...defaultProps,
		...props
	};

	return (
		<aside className={`${styles.sidebar} ${className}`}>
			<div className={styles.hamburger}>
				<IconButton
					src={hamburgerUrl}
				/>
			</div>
			<div className={styles.containter}>
				<IconButton
					src={houseUrl}
					text='Home'
				/>
				<IconButton
					src={cogUrl}
					text='Settings'
				/>
			</div>
		</aside>
	);
}