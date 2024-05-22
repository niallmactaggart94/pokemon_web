import { QueryClient } from 'react-query';
import { getRetryPolicy } from 'utils';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            ...getRetryPolicy()
        }
    }
});
