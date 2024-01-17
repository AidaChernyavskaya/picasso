import {IPost} from "../../../pages/posts-list/PostsList";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
        }),
        getById: build.query<IPost, number>({
            query: (id: number = 1) => ({
                url: `/posts/${id}`,
            }),
        }),
    })
})
