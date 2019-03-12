import authors from "../data";

const initialState = {
  authors: authors,
  newAuthorID: 5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(action.payload), //concat will return a new array (vs. .push, which will return an extisting, modified array)
        newAuthorID: state.newAuthorID + 1
      };
    case "DELETE_AUTHOR":
      return {
        ...state,
        authors: state.authors.filter(author => author !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
