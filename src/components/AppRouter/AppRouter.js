import React from "react";
import { Route } from "react-router-dom";

import routes from "../../config/routes";
import styles from "./AppRouter.module.scss";

const AppRouter = () => {
  const routePaths = routes.map((route, index) => (
    <Route key={index} exact={Boolean(route.exact)} path={route.path} component={route.component()} />
  ));
  return (
    <div className={styles.container}>
      {routePaths}
      {/* <Route path="/" exact
            render={
              (routeProps) => (
                <App {...routeProps} {...props} />
              )
            } 
        /> */}
    </div>
  );
};

export default AppRouter;
