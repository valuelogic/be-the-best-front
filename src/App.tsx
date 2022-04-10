import React from 'react';
import Header from './components/layout/header/Header';

const styles = {
	app: {
		fontFamily: 'Arial',
		margin: 0
	} as React.CSSProperties
};

const App = () => (
	<div style={styles.app}>
		<Header/>
	</div>
);

export default App;
