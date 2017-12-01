const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // copy new state so no mutations to old state
      const newState = [ ...state ];
      // create the todo from the action object
      const newTodo = {
         id: action.id,
         task: action.task,
         completed: action.completed
      };
      // okay to mutate our own copy
      newState.push(newTodo);
      return newState
    case 'TOGGLE_TODO':
      // copy new state so no mutations to old state
      var newState2 = [...state];
      var tempObj = newState2[action.id];
      newState2[action.id] = Object.assign({},tempObj,{completed:!tempObj.completed});
      return newState2;
    case 'DELETE_TODO':
      console.log("Trying:",state);
      var newState3 = state.map(
        (todo)=>
        (Object.assign({},todo))
      );
      newState3.splice(action.id,1);
      for(var i = action.id; i<newState3.length; i++){
        newState3[i].id--;
      }
      console.log("NewState:",newState3);
      return newState3;
     default:
         return state;
  }
};

export default reducer;
