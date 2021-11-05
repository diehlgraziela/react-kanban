import React from "react";
import "./tasklist.css";
import propTypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem";

export default function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista vazia</div>}
        <button className="button" onClick={addTask}>
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

Tasklist.propTypes = {
  title: propTypes.string.isRequired,
  onAddTask: propTypes.func.isRequired,
  tasks: propTypes.array.isRequired
};
