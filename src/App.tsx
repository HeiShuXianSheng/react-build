import React, { FC, Suspense } from "react";
import { Button } from "antd";
import "./App.css";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { QUERY_USER } from "./graphql";
import Home from "./pages";
import About from "./pages/about";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

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

    // <Router>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </Suspense>
    // </Router>
  );
};

export default App;
