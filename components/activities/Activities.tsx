import { useMoralis, useWeb3Contract } from 'react-moralis';
import React, { useEffect, useState } from 'react';
import {
	Activities as ActivitiesNs,
	Activities__factory,
	Players__factory,
	Requests__factory,
} from '../../constants/typechain-types';
import { ethers } from 'ethers';
import { Button, Table, Tag, getEllipsisTxt } from 'web3uikit';
import { SharedModel } from '../../constants/typechain-types/contracts/Players';
import { getContractAddress } from '../../utils/getContractAddress';

export const Activities: React.FC = () => {
	const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis();
	const chainId = Number.parseInt(chainIdHex!).toString();

	const activitiesAddress: string | undefined = getContractAddress(
		'Activities',
		chainId
	);

	const playersAddress: string | undefined = getContractAddress(
		'Players',
		chainId
	);

	const requestsAddress: string | undefined = getContractAddress(
		'Requests',
		chainId
	);

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

	const { runContractFunction: request } = useWeb3Contract({
		abi: Requests__factory.abi,
		functionName: 'request',
		contractAddress: requestsAddress,
	});

	const updateUI = async () => {
		setActivities((await getActivities()) as ActivitiesNs.ActivityDtoStruct[]);
		setPlayer((await getPlayer()) as SharedModel.PlayerStruct);
	};

	useEffect(() => {
		if (isWeb3Enabled) {
			updateUI();
		}
	}, [isWeb3Enabled]);

	if (!isWeb3Enabled) {
		return <div>Web3 Disabled</div>;
	}

	if (!player || player.walletAddress === ethers.constants.AddressZero) {
		return <div>You&apos;re not a player</div>;
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
						key={`${activity.contractAddress}__tag`}
						text={getEllipsisTxt(`0x${activity.contractAddress}`)}
					/>,
					<Button
						key={`${activity.contractAddress}__requestButton`}
						disabled={!activity.isActive}
						onClick={async () => {
							await request({
								params: {
									params: {
										_activity: activity.contractAddress,
									},
								},
							});
						}}
						text="Request"
					/>,
				])}
			/>
		</>
	);
};
