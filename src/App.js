import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styled from "styled-components";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Route path="/" exact>
              {/* Chat */}
            </Route>
          </Switch>
        </AppBody>
      </>
    </Router>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
