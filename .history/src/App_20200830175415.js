import React from "react";
import ContentLayout from "./components/Layout/ContentLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";

import "./App.css";

function App({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* <Header /> */}
            <ContentLayout>
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
