import { apiSlice } from '../api/apiSlice';

export const withdrawApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// create new withdraw request
		createWithdrawRequest: builder.mutation<any, any>({
			query: (body) => ({
				url: `/new/withdraw`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['User', 'Withdraws'],
		}),

		// get  my withdraw requests
		getMyWithdrawRequests: builder.query<any, any>({
			query: () => `/my-withdraws`,
			providesTags: ['Withdraws'],
		}),
	}),
});

export const {
	useCreateWithdrawRequestMutation,
	useGetMyWithdrawRequestsQuery,
} = withdrawApi;
