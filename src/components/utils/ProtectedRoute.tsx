import React from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {
  isAuth: boolean;
  component: React.FC;
}

const ProtectedRoute: React.FC<Props> = ({
  isAuth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
