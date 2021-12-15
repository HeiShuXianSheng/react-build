import { ApolloLink, Operation } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { message } from "antd";

// const loginPath = '/user/login';

export const createAuthXVariables = (operation?: Operation) => {
  return {
    "x-jsf-graphql-uin":
      "jsf&user&9&uP_ToD1vkrWQBKxyXvPjMTu6422m1m9mliH_Tj723stbd-qfYYzqbA",
  };
};

export const wsAuthMiddleware = new ApolloLink((operation, forward) => {
  // operation.variables = {
  //   ...operation.variables,
  // ...createAuthXVariables(),
  // };
  return forward(operation);
});

export const httpAuthMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: createAuthXVariables(operation),
  });
  return forward(operation);
});

export const onErrorMiddleware = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    if (operation.operationName === "IgnoreErrorsQuery") {
      response!.errors = undefined;
    }

    if (graphQLErrors) {
      const graphQLErrorsCauseList = graphQLErrors.map(
        ({ message: errorMessage, locations, path }) =>
          // `[GraphQL error]: Message: ${errorMessage}, Location: ${locations}, Path: ${path}`,
          `[GraphQL error]: ${errorMessage}`
      );
      message.error(graphQLErrorsCauseList);

      // TODO: retry
      // Apollo Server sets code to UNAUTHENTICATED
      // when an AuthenticationError is thrown in a resolver
      // for (let err of graphQLErrors) {
      //   switch (err.extensions.code) {
      //     // Apollo Server sets code to UNAUTHENTICATED
      //     // when an AuthenticationError is thrown in a resolver
      //     case 'UNAUTHENTICATED':
      //
      //       // Modify the operation context with a new token
      //       const oldHeaders = operation.getContext().headers;
      //       operation.setContext({
      //         headers: {
      //           ...oldHeaders,
      //           authorization: getNewToken(),
      //         },
      //       });
      //       // Retry the request, returning the new observable
      //       return forward(operation);
      //   }
      // }
    }

    if (networkError) {
      message.error("网络异常，请稍后再试。");
      console.log(`[Network error]: ${networkError}`);
    }
  }
);
