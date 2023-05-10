import React, { Component, useState } from "react";
import Navbar from "../Navbar/Navbar";
import TodoList from "../TodoList/TodoList";
import { MainBody } from "../../styled/Todo";

class Todo extends Component {
  render() {
    return (
      <>
        {/* main component having other child components in it */}
        <MainBody>
          <Navbar />
          <TodoList />
        </MainBody>
      </>
    );
  }
}

export default Todo;
