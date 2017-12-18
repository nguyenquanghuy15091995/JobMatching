import { initFakeData } from '../fake-data';
import { ADD_NEW_PARENT_NOTE_TO_LIST } from './constant';

export const loadUserData = (state = initFakeData, action) => {
  switch(action.type) {
    case ADD_NEW_PARENT_NOTE_TO_LIST:
    //console.log(state);
    state.person.parentNotes = [...state.person.parentNotes, action.newParentNote];
    //console.log(temps)
    return state;
    default:
    return state;
  }
}