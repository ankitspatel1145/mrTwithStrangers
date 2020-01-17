import { connect } from 'react-redux';
import EventShow from './event_show';
import { getEvent } from '../../actions/event_actions';

const mSTP = (state, ownProps) => ({
  event: state.entities.events[ownProps.match.params.eventId]
})
const mDTP = (dispatchEvent) => ({
  getEvent: (eventId) => dispatchEvent(getEvent(eventId))
})

export default connect(mSTP, mDTP)(EventShow)