import { useMoralis, useWeb3Contract } from 'react-moralis';
import React, { useEffect, useState } from 'react';
import {
	Activities as ActivitiesNs,
	Activities__factory,
	Players__factory,
} from '../../constants/typechain-types';
import addresses from '../../constants/addresses.json';
import { ethers } from 'ethers';
import { Button, Table, Tag } from 'web3uikit';
import { SharedModel } from '../../constants/typechain-types/contracts/Players';

interface IContractAddresses {
	[chainId: string]: Record<string, string>;
}

export const Activities: React.FC = () => {
	const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis();
	const chainId = Number.parseInt(chainIdHex!).toString();

	const activitiesAddress: string | undefined =
		chainId.toString() in addresses
			? (addresses as IContractAddresses)[chainId.toString()].Activities
			: undefined;

	const playersAddress: string | undefined =
		chainId.toString() in addresses
			? (addresses as IContractAddresses)[chainId.toString()].Players
			: undefined;

	const [activities, setActivities] = useState<
		ActivitiesNs.ActivityDtoStruct[]
	>([]);
	const [player, setPlayer] = useState<SharedModel.PlayerStruct>();

	const { runContractFunction: getActivities } = useWeb3Contract({
		abi: Activities__factory.abi,
		functionName: 'getActivities',
		contractAddress: activitiesAddress,
		params: {},
	});

	const { runContractFunction: getPlayer } = useWeb3Contract({
		abi: Players__factory.abi,
		functionName: 'getPlayer',
		contractAddress: playersAddress,
		params: { _walletAddress: account },
	});

	const updateUI = async () => {
		const activities = (await getActivities()) as any; // as ActivitiesNs.ActivityDtoStruct[];
		setActivities(activities as ActivitiesNs.ActivityDtoStruct[]);

		const player = (await getPlayer()) as SharedModel.PlayerStructOutput;
		setPlayer(player);
	};

	useEffect(() => {
		if (isWeb3Enabled) {
			updateUI();
		}
	}, [isWeb3Enabled, account]);

	if (!isWeb3Enabled) {
		return <div>Web3 Disabled</div>;
	}

	if (!player || player.walletAddress === ethers.constants.AddressZero) {
		return <div>You're not a player</div>;
	}

	return (
		<>
			<Table
				columnsConfig="1fr auto auto auto auto"
				header={['Name', 'Reward', 'Active', 'Address', '']}
				isColumnSortable={[true, true, true, false]}
				pageSize={10}
				data={activities.map((activity) => [
					activity.name,
					activity.reward.toString(),
					activity.isActive ? 'true' : 'false',
					<Tag
						text={`0x${activity.contractAddress.slice(
							0,
							4
						)}...${activity.contractAddress.slice(-6)}`}
					/>,
					<Button
						disabled={!activity.isActive}
						onClick={() => {
							alert('Coming soon');
						}}
						text="Request"
					/>,
				])}
			/>
		</>
	);
};
