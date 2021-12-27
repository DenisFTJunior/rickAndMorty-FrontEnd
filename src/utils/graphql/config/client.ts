import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache(
    // {
    //     typePolicies: {
    //         Query: {
    //             fields: {
    //                 characters: {
    //                     keyArgs: false,
    //                     merge(existing = [], incoming) {
    //                         return [...existing, ...incoming];
    //                     },
    //                 }
    //             }
    //         }
    //     }
    // }
)

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
        notifyOnNetworkStatusChange: true
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    },
    mutate: {
        errorPolicy: 'all'
    }
}

export const RickAndMortyClient = new ApolloClient({
    uri: `https://rickandmortyapi.com/graphql`,
    cache,
    resolvers: {},
    defaultOptions
})