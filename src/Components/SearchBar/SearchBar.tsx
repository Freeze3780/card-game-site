import styles from './SearchBar.module.css';
import imgUrl from '../../assets/Icons/search.svg';
import { useEffect, useRef } from 'react';

export default function SearchBar() {
	const inputRef = useRef<HTMLInputElement>(null);
	
	const clickHandler = () => {
		if (inputRef.current){
			inputRef.current.focus();
		}
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				clickHandler();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div className={styles.container} onClick={clickHandler}>
			<img className={styles.img} src={imgUrl} alt="Search Icon" />
			<input ref={inputRef} className={styles.input} type="text" placeholder='Search...' />
			<div className={styles.ctrlk}>
				CTRL K
			</div>
		</div>
	);
}