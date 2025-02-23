import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://client-vazhivilakk-backend.onrender.com/api/admin',
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Voices', 'Categories', 'Orders'], // Tags to manage cache invalidation

  endpoints: (builder) => ({

    signup: builder.mutation({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
    }),

    signin: builder.mutation({
      query: (data) => ({
        url: '/signin',
        method: 'POST',
        body: data,
      }),
    }),

    signout: builder.mutation({
      query: () => ({
        url: '/signout',
        method: 'POST',
      }),
    }),

    fetchAdmin: builder.query({
      query: () => '/profile',
    }),



    fetchUsers: builder.query({
      query: () => '/users',
    }),

    fetchVoices: builder.query({
      query: () => '/all-voices',
      providesTags: ['Voices'],
    }),

    addVoice: builder.mutation({
      query: (voice) => ({
        url: '/add-voice',
        method: 'POST',
        body: voice,
      }),
      invalidatesTags: ['Voices'],
    }),

    deleteVoice: builder.mutation({
      query: (id) => ({
        url: `/delete-voice/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Voices'],
    }),

    fetchCategories: builder.query({
      query: () => '/all-categories',
      providesTags: ['Categories'],
    }),

    addCategory: builder.mutation({
      query: (formData) => ({
        url: '/add-category',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Categories'],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/delete-category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Categories'],
    }),

    fetchOrders: builder.query({
      query: () => '/all-orders',
      providesTags: ['Orders'],
    }),

    generateImage: builder.mutation({
      query: (name) => ({
        url: '/ai-image',
        method: 'POST',
        body: { name },
      }),
    }),


  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useSignoutMutation,
  useFetchAdminQuery,
  useFetchUsersQuery,
  useFetchVoicesQuery,
  useAddVoiceMutation,
  useDeleteVoiceMutation,
  useFetchCategoriesQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useFetchOrdersQuery,
  useGenerateImageMutation,
} = adminApi;
