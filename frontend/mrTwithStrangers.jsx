import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store';
import * as EventUtil from './util/event_api_util'
document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id, canHost: window.currentUser.canHost },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.EventUtil = EventUtil
  window.store = store
  window.dispatch = store.dispatch
  window.getState = store.getState
  ReactDOM.render(<Root store={store}/>, root);
})