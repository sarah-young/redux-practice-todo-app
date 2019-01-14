import React from "react";
import Todo from "./Todo";
import { connect } from 'react-redux';
import { getTodos } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

//Created a constant called ToDoList
//It takes in { todos } as an argument
//It renders a <ul> element using the following logic:
//If todos and todos.length are true
//todos will be mapped using each todo and an index
//and will return a jsx object element
//with the todo id and todo content
//If there is no todos object or the todos object has no length (aka is empty)
// "No todos, yay!" is returned 

// const mapStateToProps = (state) => {
//   const{ byIds, allIds } = state.todos || {};
//   console.log(byIds, allIds)
//   const todos = 
//     allIds && allIds.length
//     ? allIds.map(id => (byIds ? { ...byIds[id], id} : null))
//     : null;
//   return { todos };
// };

// Maps state to a prop named state
// Takes in state as a parameter
// Unpack state.todos or {} into byIds, allIds
// Create a todos object 
// if allIds exists and has a length > 0
// allIds is mapped using id


export default connect(state => ({ todos: getTodos(state) }))(TodoList);

