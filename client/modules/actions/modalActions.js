import { OPEN_EVENT_MODAL, CLOSE_EVENT_MODAL  } from './types';



export function openEventModal() {
  return { type: OPEN_EVENT_MODAL}
}

export function closeEventModal() {
  return { type: CLOSE_EVENT_MODAL }
}
