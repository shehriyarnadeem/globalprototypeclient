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
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
    setLoading(false);
  }, []);

  const isLoading = () => {
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        svgClass="my-custom-class"
      />
    );
  };

  return (
    <div className="App">
      {!loading ? (
        isLoading()
      ) : (
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
      )}
    </div>
  );
}

export default App;
