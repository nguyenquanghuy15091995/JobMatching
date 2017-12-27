import { initFakeData } from '../fake-data';
import {
  ADD_NEW_PARENT_NOTE_TO_LIST, DELETE_PARENT_NOTE, EDIT_PARENT_NOTE, LOAD_USER_FROM_DATABASE
} from './constant';
import { Link } from 'react-router-dom';

export const loadUserData = (state = initFakeData, action) => {
  switch (action.type) {
    case LOAD_USER_FROM_DATABASE:
      state = action.userDatabase;
      return state;
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
      return state;
    case EDIT_PARENT_NOTE:
      state.person.parentNotes[action.index] = action.newParentNote;
      return state;
    default:
      return state;
  }
}
