import PriorityBadge from "./PriorityBadge";

function TaskItem({ task, onDelete }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Done":
        return "badge bg-success bg-opacity-10 text-success";
      case "In Progress":
        return "badge bg-warning bg-opacity-10 text-warning";
      default:
        return "badge bg-secondary bg-opacity-10 text-secondary";
    }
  };

  const getRingClass = (status) => {
    switch (status) {
      case "Done":
        return "ring-done";
      case "In Progress":
        return "ring-progress";
      default:
        return "ring-todo";
    }
  };

  return (
    <div className="card task-item-card mb-3 border-0 shadow-sm">
      <div className="card-body py-3">
        <div className="row align-items-center gx-3">
          <div className="col-md-4">
            <small className="text-muted">Task</small>
            <h6 className="mb-0">{task.task}</h6>
          </div>

          <div className="col-md-2">
            <small className="text-muted">Priority</small>
            <div>
              <PriorityBadge priority={task.priority} />
            </div>
          </div>

          <div className="col-md-2">
            <small className="text-muted">Status</small>
            <div className="mt-1">
              <span className={getStatusClass(task.status)}>{task.status}</span>
            </div>
          </div>

          <div className="col-md-2 d-flex justify-content-center">
            <div className={`task-progress-ring ${getRingClass(task.status)}`}>
              {task.status === "Done" && <span className="ring-icon">✓</span>}
            </div>
          </div>

          <div className="col-md-2 text-md-end text-start">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={() => alert("Chức năng sửa đang phát triển")}
            >
              ✏️
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => onDelete(task.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
