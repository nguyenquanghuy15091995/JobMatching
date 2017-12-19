import { ADD_NEW_PARENT_NOTE_TO_LIST, DELETE_PARENT_NOTE } from './constant';

export const addNewParentNoteAction = (newParentNote) => {
  return {
    type: ADD_NEW_PARENT_NOTE_TO_LIST,
    newParentNote,
  };
}

export const deleteParentNoteAction = (index) => {
  return {
    type: DELETE_PARENT_NOTE,
    index,
  };
}