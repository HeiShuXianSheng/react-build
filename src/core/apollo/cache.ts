import { InMemoryCache } from '@apollo/client';
// import fragmentTypes from "./FragmentTypes.json";

// const fragmentMatcher = new IntrospectionFragmentMatcher({
// introspectionQueryResultData: fragmentTypes
// });

export const apolloCache = new InMemoryCache({
  // fragmentMatcher
});
