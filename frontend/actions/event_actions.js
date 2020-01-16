import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events: events
})
export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event: event
})
export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
})

export const getAllEvents = () => dispatchEvent => (
  EventApiUtil.getAllEvents()
    .then(events => dispatchEvent(receiveAllEvents(events)))
)

export const getEvent = (id) => dispatchEvent => (
  EventApiUtil.getEvent(id)
    .then(event => dispatchEvent(receiveAEvent(event)))
)

export const createEvent = event => dispatchEvent => (
  EventApiUtil.createEvent(event)
    .then(event => dispatchEvent(receiveEvent(event)))
)