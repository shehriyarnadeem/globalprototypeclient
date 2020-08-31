import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStatevalue } from "./context/StateProvider";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import ContentLayout from "./components/Layout/ContentLayout";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App({ children }) {
  const [{ user }, dispatch] = useStatevalue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <ContentLayout>
              <Sidebar />
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </ContentLayout>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
