import {connect} from 'react-redux';
import {getAllEvents} from '../../actions/event_actions';
import EventsIndex from './events_index';

const mapSTP = state => ({
  events: Object.values(state.entities.events)
})

const mapDTP = dispatchEvent => {
  // debugger
  return ({
  
    getAllEvents: () => dispatchEvent(getAllEvents())
  })
}
export default connect(mapSTP, mapDTP)(EventsIndex);