import {AbstractConnector} from "@web3-react/abstract-connector";
import {InjectedConnector} from "@web3-react/injected-connector";

export const connectMetamask = async (activate: { (connector: AbstractConnector, onError?: ((error: Error) => void) | undefined, throwErrors?: boolean | undefined): Promise<void>; (arg0: InjectedConnector): any; }) => {
	try {
		const injected = new InjectedConnector({});
		await activate(injected);
	} catch (e) {
		console.log(e);
	}
};
