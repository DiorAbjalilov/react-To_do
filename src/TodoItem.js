import React, { useContext } from "react";
import { Context } from "./context";
export default function TodoItem({ title, id, completed }) {
  const { toggelTodo, removTodo } = useContext(Context);
  const cls = ["todo"];
  if (completed) {
    cls.push("completed");
  }
  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggelTodo(id)}
        />
        <span>{title}</span>

        <i onClick={() => removTodo(id)} className="material-icons red-text">
          delete
        </i>
      </label>
    </li>
  );
}
