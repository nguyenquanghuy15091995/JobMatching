import {
  ADD_NEW_PARENT_NOTE_TO_LIST, DELETE_PARENT_NOTE, EDIT_PARENT_NOTE, LOAD_USER_FROM_DATABASE
} from './constant';

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

export const editParentNoteAction = (index, newParentNote) => {
  return {
    type: EDIT_PARENT_NOTE,
    index,
    newParentNote,
  };
}

export const loadUserDatabaseAction = (userDatabase) => {
  return {
    type: LOAD_USER_FROM_DATABASE,
    userDatabase,
  };
}