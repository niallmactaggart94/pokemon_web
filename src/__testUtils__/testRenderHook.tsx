import { RenderHookOptions, renderHook } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

function renderHookWithProviders<TProps, TResult>(
	callback: (props: TProps) => TResult,
	renderOptions: RenderHookOptions<TProps>
) {
	function Wrapper({ children }: { children?: ReactNode }): JSX.Element {
		const queryClient = new QueryClient({
			defaultOptions: {
				queries: {
					retry: false
				}
			}
		});
		return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
	}

	return { ...renderHook(callback, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react-hooks';
export { renderHookWithProviders as renderHook };
