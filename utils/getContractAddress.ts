import addresses from '../constants/addresses.json';

export type KnownContracts =
	| 'Authorization'
	| 'Activities'
	| 'Players'
	| 'Requests'
	| 'PlayersManager'
	| 'RequestsManager';

interface IContractAddresses {
	[chainId: string]: Record<KnownContracts, string>;
}

export const getContractAddress = (
	contractName: KnownContracts,
	chainId?: string
): string | undefined => {
	if (!chainId) {
		return undefined;
	}

	return (addresses as IContractAddresses)[chainId]?.[contractName];
};
