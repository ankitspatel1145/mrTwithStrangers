import { combineReducers } from 'redux';

import users from './users_reducer';
import eventsReducer from './events_reducer';



export default combineReducers({
  // benches,
  events: eventsReducer,
  users,
});
