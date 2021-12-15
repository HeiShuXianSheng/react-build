import { ApolloClient } from "@apollo/client";
import { apolloCache } from "./cache";
import { apolloLink } from "./link";

export const apolloClient = new ApolloClient({
  link: apolloLink,
  cache: apolloCache,
  connectToDevTools: true,

  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      notifyOnNetworkStatusChange: true,
    },
    query: {
      // 缓存情况复杂，需要手动控制缓存，默认不用缓存
      fetchPolicy: "no-cache",
      // notifyOnNetworkStatusChange: true,
    },
    mutate: { fetchPolicy: "no-cache" },
  },
});
