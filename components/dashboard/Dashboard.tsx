import React, {useEffect, useState} from 'react';
import {useMoralis, useWeb3Contract} from "react-moralis";
import {getContractAddress} from "../../utils/getContractAddress";
import {SharedModel} from "../../constants/typechain-types/contracts/Players";
import { Players__factory} from "../../constants/typechain-types";
import {Bar, XAxis, YAxis, BarChart} from "recharts";

type Player = {
	name: string,
	points: number
}

export const Dashboard: React.FC = () => {
	const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
	const chainId = Number.parseInt(chainIdHex!).toString();

	const playersAddress: string | undefined = getContractAddress(
		'Players',
		chainId
	);

	const [players, setPlayers] = useState<Player[]>();
	//
	const { runContractFunction: getPlayers } = useWeb3Contract({
		abi: Players__factory.abi,
		functionName: 'getPlayers',
		contractAddress: playersAddress,
		params: {}
	});

	const updateUI = async () => {
		let players = (await getPlayers() as SharedModel.PlayerStruct[])
			.map((player) => {
				return {
					name: player.nick.toString() ?? player.walletAddress.toString(),
					points: Number(player.points)
				}
			});
		players.sort((p1, p2) => p2.points - p1.points)
		setPlayers(players);
	};

	useEffect(() => {
		if (isWeb3Enabled) {
			updateUI()
		}
	}, [isWeb3Enabled])

	return (
		<>
			{players && (<BarChart
				width={500}
				height={300}
				data={players}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5
				}}
			>
				<XAxis dataKey="name" />
				<YAxis />
				<Bar dataKey="points" fill="#8884d8" />
			</BarChart>)}
		</>
	)
}


