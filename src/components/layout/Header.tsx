import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import React, { useEffect, useState } from 'react';

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
	}, [active]);

	const connectMetamask = async () => {
		try {
			const injected: InjectedConnector = new InjectedConnector({});
			await activate(injected);
		} catch (e) {
			console.log(e);
		}
	};

	const disconnectMetamask = () => {
		try {
			deactivate();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			{active ? (
				<div>
					<button onClick={disconnectMetamask}>Disconnect</button>
					<span>Connected wallet address: {userWalletAddress}</span>
				</div>
			) : (
				<button onClick={connectMetamask}>Connect</button>
			)}
		</div>
	);
};

export default Header;
