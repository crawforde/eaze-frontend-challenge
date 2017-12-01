const addTodo = function (id,task){
  return {
    type: 'ADD_TODO',
    id,
    task,
    completed: false
  };
};

const toggleTodo = function (id){
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

const deleteTodo = function (id){
  return {
    type: 'DELETE_TODO',
    id
  };
};

export {addTodo,toggleTodo,deleteTodo};
