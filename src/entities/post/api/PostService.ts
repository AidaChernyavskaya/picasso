import {IPost} from "../../../pages/posts-list/PostsList";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], {limit: number, page: number}>({
            query: ({limit = 10, page = 0}) => ({
                url: `/posts`,
                params: {
                    _limit: limit,
                    _start: page
                }
            }),
            // serializeQueryArgs: ({ endpointName }) => {
            //     return endpointName
            // },
            // merge: (currentCache, newItems) => {
            //     currentCache.push(...newItems)
            // },
            // forceRefetch({ currentArg, previousArg }) {
            //     return currentArg !== previousArg
            // },
        }),
        getById: build.query<IPost, number>({
            query: (id: number = 1) => ({
                url: `/posts/${id}`,
            }),
        }),
    })
})
