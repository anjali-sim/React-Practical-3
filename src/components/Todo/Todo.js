import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import TodoList from "../TodoList/TodoList";
import ButtonWrapper from "../ButtonWrapper/ButtonWrapper";
import { MainBody } from "../../styled/Todo";

class Todo extends Component {
  render() {
    return (
      <>
        {/* main component having other child components in it */}
        <MainBody>
          <Navbar />
          <TodoList />
          <ButtonWrapper />
        </MainBody>
      </>
    );
  }
}

export default Todo;
