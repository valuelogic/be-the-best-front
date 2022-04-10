import {useWeb3React} from '@web3-react/core';
import React, {useEffect, useState} from 'react';
import {connectMetamask} from '../../../services/metamask/ConnectMetamask';
import {disconnectMetamask} from '../../../services/metamask/DisconnectMetamask';

const styles = {
	header: {
		textAlign: 'center'
	} as React.CSSProperties,
	navbar: {
		padding: 16,
		marginBottom: 16
	} as React.CSSProperties,
	title: {
		float: 'left'
	} as React.CSSProperties,
	connectButton: {
		float: 'right',
		cursor: 'pointer'
	} as React.CSSProperties,
	connectionInfo: {
		display: 'inline-grid',
		fontSize: 'small',
		color: 'grey'
	} as React.CSSProperties
};

const Header = () => {
	const { activate, active, deactivate, library: provider } = useWeb3React();
	const [userWalletAddress, setUserWalletAddress] = useState('');

	useEffect(() => {
		const getUserData = async () => {
			if (active) {
				const signer = await provider.getSigner();
				const userWalletAddress = await signer.getAddress();
				setUserWalletAddress(userWalletAddress);
			} else {
				setUserWalletAddress('');
			}
		};
		getUserData();
	}, [active, userWalletAddress, provider]);

	return (
		<div style={styles.header}>
			<div style={styles.navbar}>
				<div style={styles.title}>BeTheBest</div>
				{active ? (
					<div style={styles.connectButton} onClick={() => disconnectMetamask(deactivate)}>Disconnect</div>
				) : (
					<div style={styles.connectButton} onClick={() => connectMetamask(activate)}>Connect</div>
				)}
			</div>
			{active &&
				<div style={styles.connectionInfo} >
					<span>Connected wallet at:</span>
					<span>{userWalletAddress}</span>
				</div>
			}
		</div>
	);
};

export default Header;
