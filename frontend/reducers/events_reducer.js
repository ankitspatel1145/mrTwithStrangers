import {RECEIVE_ALL_EVENTS,RECEIVE_EVENT, RECEIVE_SESSION_ERRORS } from '../actions/event_actions';
import merge from 'lodash/merge';
const eventsReducer = (state ={}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return action.events
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event });
      
    default:
    return state;
  }
}

export default eventsReducer;