import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import TodoList from "../TodoList/TodoList";
import AddTodo from "../ButtonPosition/AddTodo";
import { MainBody } from "../../styled/Todo";

class Todo extends Component {
  render() {
    return (
      <>
        {/* main component having other child components in it */}
        <MainBody>
          <Navbar />
          <TodoList />
          <AddTodo />
        </MainBody>
      </>
    );
  }
}

export default Todo;
