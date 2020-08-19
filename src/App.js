import React, { Suspense, lazy, useContext } from "react";
import { Switch, Route, Redirect } from "react-router";

import "./App.css";
import Spinner from "./Components/Spinner/Spinner";
import { AuthContext } from "./context/auth-context";

const Home = lazy(() => import("./Containers/Home/Home"));
const Events = lazy(() => import("./Containers/Events/Events"));
const Event = lazy(() => import("./Containers/Event/Event"));
const Layout = lazy(() => import("./Containers/Layout/Layout"));
const Login = lazy(() => import("./Containers/Login/Login"));
const Cart = lazy(() => import("./Containers/Cart/Cart"));
const YourEvents = lazy(() => import("./Containers/YourEvents/YourEvents"));
const Profile = lazy(() => import("./Containers/Profile/Profile"));
const About = lazy(() => import("./Containers/About/About"));
const PrivacyPolicy = lazy(() =>
  import("./Containers/PrivacyPolicy/PrivacyPolicy")
);
const TermsAndConditions = lazy(() =>
  import("./Containers/TermsAndConditions/TermsAndConditions")
);
const Error404 = lazy(() => import("./Containers/Error404/Error404"));

const App = (props) => {
  const auth = useContext(AuthContext);

  const routes = auth.user ? (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/events" exact>
        <Layout>
          <Events />
        </Layout>
      </Route>
      <Route path="/event/:eventId">
        <Layout>
          <Event />
        </Layout>
      </Route>
      <Route path="/profile">
        <Layout>
          <Profile />
        </Layout>
      </Route>
      <Route path="/cart">
        <Layout>
          <Cart />
        </Layout>
      </Route>
      <Route path="/your-events">
        <Layout>
          <YourEvents />
        </Layout>
      </Route>
      <Route path="/about">
        <Layout>
          <About />
        </Layout>
      </Route>
      <Route path="/privacy-policy">
        <Layout>
          <PrivacyPolicy />
        </Layout>
      </Route>
      <Route path="/tnc">
        <Layout>
          <TermsAndConditions />
        </Layout>
      </Route>
      <Route path="/404">
        <Error404 />
      </Route>
      <Redirect to="/404" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/events" exact>
        <Layout>
          <Events />
        </Layout>
      </Route>
      <Route path="/event/:eventId">
        <Layout>
          <Event />
        </Layout>
      </Route>
      <Route path="/about">
        <Layout>
          <About />
        </Layout>
      </Route>
      <Route path="/login">
        <Layout>
          <Login />
        </Layout>
      </Route>
      <Route path="/privacy-policy">
        <Layout>
          <PrivacyPolicy />
        </Layout>
      </Route>
      <Route path="/tnc">
        <Layout>
          <TermsAndConditions />
        </Layout>
      </Route>
      <Route path="/404">
        <Error404 />
      </Route>
      <Redirect to="/404" />
    </Switch>
  );

  return <Suspense fallback={<Spinner />}>{routes}</Suspense>;
};

export default App;
