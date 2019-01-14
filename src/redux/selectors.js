export const getTodosState = store => store.todos
// takes in store, returns store.todos

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : []
  // takes in store as a parameter
  // calls getTodoState with the argument store 
  // if getTodosState(store) is truthy, it calls getTodosState with store as an argument 
  // and returns all the ids in an array
  // otherwise, it returns an empty array

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {}
// Takes in store and id as parameters. 
// calls getTodosState with store as the only argument
// If getTodosState returns true:
// An object is created that holds the todos from the store that match the id
// If getTodosState is falsy: 
// An empty object is returned
/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));
// Takes in a parameter of store
// Calls getTodoList with an argument of store
// Using the map method, each index of the store array is 
// used to call getTodoById using store and the id as arguments
