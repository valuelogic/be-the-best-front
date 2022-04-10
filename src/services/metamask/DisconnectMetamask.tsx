export const disconnectMetamask = (deactivate: () => void) => {
	try {
		deactivate();
	} catch (e) {
		console.log(e);
	}
}
