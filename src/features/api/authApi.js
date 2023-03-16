import { getUser } from '../auth/authSlice';
import apiSlice from './apiSlice';

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/user',
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const res = queryFulfilled;
          dispatch(getUser(data.email));
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useRegisterMutation } = authApi;
