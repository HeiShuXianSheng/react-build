import { HttpLink } from "@apollo/client";
import { httpAuthMiddleware, onErrorMiddleware } from "./middleware";
import Profiles from "../profiles";

const { concat } = HttpLink;

export const apiHttpLink = new HttpLink({
  uri: Profiles.serverUrl,
  credentials: "include",
});

export const apolloLink = concat(
  onErrorMiddleware,
  concat(httpAuthMiddleware, apiHttpLink)
);
