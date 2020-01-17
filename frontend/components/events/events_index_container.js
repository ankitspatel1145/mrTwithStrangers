import {connect} from 'react-redux';
import {getAllEvents, deleteEvent} from '../../actions/event_actions';
import EventsIndex from './events_index';

const mapSTP = state => ({
  events: Object.values(state.entities.events)
})

const mapDTP = dispatchEvent => {
  // debugger
  return ({
    // deleteEvent: () => dispatchEvent(deleteEvent(eventId)),
    getAllEvents: () => dispatchEvent(getAllEvents())
  })
}
export default connect(mapSTP, mapDTP)(EventsIndex);