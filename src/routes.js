import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { Home } from "../pages/home";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedSwitch = withRouter(({ location  }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
