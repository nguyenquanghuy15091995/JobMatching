import { PUSH_AUTOCOMPLETE_TO_LIST, PUSH_SEARCH_RESULT_LIST } from './constants';

export const pushAutocompleteDataToListAction = (autocompletes) => {
  return ({
    type: PUSH_AUTOCOMPLETE_TO_LIST,
    autocompletes
  });
}

export const pushSearchResultsAction = (accountSearchResults) => {
  return ({
    type: PUSH_SEARCH_RESULT_LIST,
    accountSearchResults,
  });
}