import { PUSH_AUTOCOMPLETE_TO_LIST, PUSH_SEARCH_RESULT_LIST } from './constants';

export const autocompleteReducer = (state = [], action) => {
  switch (action.type) {
    case PUSH_AUTOCOMPLETE_TO_LIST:
      state = action.autocompletes;
      return state;
    default:
      return state;
  }
}

export const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case PUSH_SEARCH_RESULT_LIST:
      state = action.accountSearchResults;
      return state;
    default:
      return state;
  }
}
