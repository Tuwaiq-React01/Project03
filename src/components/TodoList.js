import React, { Component } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div className="overflow-auto h-full">
      {props.items.map((item, index) => {
        return (
          <TodoItem
            key={index}
            index={index}
            item={item}
            remove={props.remove}
            check={props.check}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
