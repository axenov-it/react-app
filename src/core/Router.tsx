import { Switch, Route } from "react-router-dom";

import { Home, TestFetch, CreateCompany } from "pages";

function Router() {
  return (
    <Switch>
      <Route path="/react-form">
        <CreateCompany />
      </Route>
      <Route path="/test-fetch">
        <TestFetch />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Router;
