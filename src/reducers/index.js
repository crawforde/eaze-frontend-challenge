const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.newSearchTerm;
    default:
      return state;
  }
};

export default reducer;
