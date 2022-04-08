import React from 'react';
import styles from './App.module.scss';
import Header from './components/layout/Header';

const App = () => {
	return (
		<div>
			<Header />
			<div className={styles.app}>BeTheBest</div>
		</div>
	);
};

export default App;
