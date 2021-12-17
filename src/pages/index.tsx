import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
const getUser = loader("../graphql/demo.graphql"); // 这种loader导致 .graphql 文件中只能写一个请求体

export default () => {
  const { data } = useQuery(getUser, {
    variables: {},
  });
  return (
    <div>
      <div>index file</div>
      <Link to={"/about"}>to about</Link>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
