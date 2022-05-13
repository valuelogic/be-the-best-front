import React from 'react';
import { useMoralis } from 'react-moralis';
import { ConnectButton } from 'web3uikit';
const styles = {
	header: {
		textAlign: 'center',
	} as React.CSSProperties,
	navbar: {
		padding: 16,
		marginBottom: 16,
	} as React.CSSProperties,
	title: {
		float: 'left',
	} as React.CSSProperties,
	connectButton: {
		float: 'right',
		cursor: 'pointer',
	} as React.CSSProperties,
	connectionInfo: {
		display: 'inline-grid',
		fontSize: 'small',

		color: 'grey',
	} as React.CSSProperties,
};

const Header = () => {
	const { isWeb3Enabled } = useMoralis();

	return (
		<div style={styles.header}>
			<div style={styles.navbar}>
				<div style={styles.title}>BeTheBest</div>

				<div style={styles.connectButton}>
					<ConnectButton moralisAuth={false}></ConnectButton>
				</div>
			</div>
		</div>
	);
};

export default Header;
