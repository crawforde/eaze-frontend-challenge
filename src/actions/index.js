const search = function (newSearchTerm){
  return {
    type: 'SEARCH',
    newSearchTerm
  };
};

export {search};
