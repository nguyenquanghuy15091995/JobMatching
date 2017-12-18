import { ADD_NEW_PARENT_NOTE_TO_LIST } from './constant';

export const addNewParentNoteAction = (newParentNote) => {
  return {
    type: ADD_NEW_PARENT_NOTE_TO_LIST,
    newParentNote,
  };
}