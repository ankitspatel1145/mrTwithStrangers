import {connect} from 'react-redux';
import {getAllEvents, deleteEvent, addUserToEvent} from '../../actions/event_actions';
import EventsIndex from './events_index';

const mapSTP = state => ({
  events: Object.values(state.entities.events),
  currentUser: state.session.id
})

const mapDTP = dispatchEvent => {
  // debugger
  return ({
    // deleteEvent: () => dispatchEvent(deleteEvent(eventId)),
    getAllEvents: () => dispatchEvent(getAllEvents()),
    addUserToEvent: (id) => dispatchEvent(addUserToEvent())
  })
}
export default connect(mapSTP, mapDTP)(EventsIndex);