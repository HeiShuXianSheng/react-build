import React, { FC } from "react";
import { Button } from "antd";
import "./App.css";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { QUERY_USER } from "./graphql";
const getUser = loader("./graphql/demo.graphql"); // 这种loader导致 .graphql 文件中只能写一个请求体

const App: FC = () => {
  const { data } = useQuery(getUser, {
    variables: {},
  });
  console.log(data);

  return (
    <div className="App">
      <div style={{ margin: "100px" }}>my antd</div>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default App;
