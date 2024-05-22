export const getRetryPolicy = () => {
	const RETRY_DELAY_MS = 1000;
	return {
		retryDelay: (retryAttempt: number) =>
			Math.min(retryAttempt > 1 ? 2 ** retryAttempt * RETRY_DELAY_MS : RETRY_DELAY_MS, 30 * RETRY_DELAY_MS)
	};
};
