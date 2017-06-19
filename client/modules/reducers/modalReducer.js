import { OPEN_EVENT_MODAL, CLOSE_EVENT_MODAL, } from 'actions/types';

const initialState = {
  eventOpen : false,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case OPEN_EVENT_MODAL:
      state = {...state, eventOpen: true}
      break

    case CLOSE_EVENT_MODAL:
      state = {...state, eventOpen: false}
      break
   }
  return state
}