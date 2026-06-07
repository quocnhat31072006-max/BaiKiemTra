import EmptyState from "./EmptyState";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </>
  );
}

export default TaskList;
