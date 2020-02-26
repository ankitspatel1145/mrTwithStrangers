import {connect} from 'react-redux';
import EventForm from './event_form';
import {createEvent} from '../../actions/event_actions';


const mstp = (state) => ({

  currentUser: state.session.id,
  canHost: state.session.canHost.toString()
});

const mdtp = dispatchEvent => ({
  createEvent: event => dispatchEvent(createEvent(event))
})

export default connect(mstp, mdtp)(EventForm)