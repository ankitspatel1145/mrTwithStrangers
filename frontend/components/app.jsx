import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Navbar from './navbar';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './spash/splash';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import EventsIndex from './events/events_index';
import hosting from './spash/hosting';
import about from './spash/about';
import FooterEle from './spash/footer';
import events_index_container from './events/events_index_container';



const App = () => (
  <div>
    <header>
      <div>
        <Navbar/>
      </div>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      <Route path="/hosting" component={hosting} />
      <Route path="/about" component={about} />
      <Route path="/events" component={events_index_container} />
      <Route exact path="/" component={Splash} />

    </Switch>
    <footer>
      <FooterEle/>
    </footer>
  </div>
);

export default App;
