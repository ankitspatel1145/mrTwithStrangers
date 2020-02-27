import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import Navbar from './navbar';

// import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './spash/splash';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import EventsIndex from './events/events_index';
import hosting from './spash/hosting';
import about from './spash/about';
import FooterEle from './spash/footer';
import events_index_container from './events/events_index_container';
import event_show_container from './events/event_show_container';
import EventFormContainter from './eventform/event_form_containter'



const App = () => (
  <div className='test'>
    <header>
      <div>
        <Navbar/>
      </div>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      <Route exact path="/" component={Splash} />
      <Route path="/hosting" component={hosting} />
      <Route path="/about" component={about} />
  
      <ProtectedRoute exact path="/events/new" component={EventFormContainter} />
      <Route exact path="/events" component={events_index_container} />
      <Route exact path="/events/:eventId" component={event_show_container} />

    </Switch>
    <footer>
      <FooterEle/>
    </footer>
  </div>
);

export default App;
