import { initFakeData } from '../fake-data';
import { ADD_NEW_PARENT_NOTE_TO_LIST, DELETE_PARENT_NOTE } from './constant';

export const loadUserData = (state = initFakeData, action) => {
  switch (action.type) {
    case ADD_NEW_PARENT_NOTE_TO_LIST:
      state.person.parentNotes = [...state.person.parentNotes, action.newParentNote];
      return state;
    case DELETE_PARENT_NOTE:
      const newParentNotes = [];
      state.person.parentNotes.map(
        (parentNote, i) => {
          if (i !== action.index) {
            newParentNotes.push(parentNote);
          }
        }
      );
      state.person.parentNotes = newParentNotes;
      console.log(state.person.parentNotes);
      return state;
    default:
      return state;
  }
}