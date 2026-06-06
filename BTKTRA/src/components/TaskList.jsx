import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </>
  );
}

export default TaskList;
