import type { NextPage } from 'next';
import Header from '../components/layout/header/Header';
import { Activities } from '../components/activities/Activities';

const styles = {
	app: {
		fontFamily: 'Arial',
		margin: 0,
	} as React.CSSProperties,
};

const Home: NextPage = () => {
	return (
		<div style={styles.app}>
			<Header />
			<Activities />
		</div>
	);
};

export default Home;
