import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStatevalue } from "./context/StateProvider";
import HttpService from "./HttpService";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import ContentLayout from "./components/Layout/ContentLayout";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { actionTypes } from "./context/reducer";
import "./App.css";

function App({ children }) {
  const [{ user }, dispatch] = useStatevalue();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function checkAuth() {
      try {
        const result = await HttpService.get("/authUser");

        dispatch({ type: actionTypes.SET_USER, user: result.data.data });
      } catch (e) {
        console.log(e, "sdsd");
      }
    }

    checkAuth();
  }, []);

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
