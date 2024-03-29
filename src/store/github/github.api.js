import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const githubApi = createApi({
    reducerPath: "github/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.github.com/"
    }),
    endpoints: build => ({
        searchUsers: build.query({
            query: (search) => ({
                url: "search/users",
                params: {
                    q: search,
                    per_page: 10
                }
            })
        }),
        getUserRepositories: build.query({
            query: (userName) => ({
                url: `users/${userName}/repos`
            })
        })
    })
});

export const { useSearchUsersQuery, useLazyGetUserRepositoriesQuery } = githubApi;