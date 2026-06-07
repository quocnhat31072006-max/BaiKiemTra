import { useState } from "react";
import {
  DEFAULT_STATUS,
  TASK_PRIORITIES,
  TASK_STATUSES,
} from "../constants/taskConfig";

function TaskForm({ addTask, closeForm }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState(DEFAULT_STATUS);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTask = task.trim();

    if (trimmedTask === "") {
      setError("Tên Task không được để trống");
      return;
    }

    if (trimmedTask.length > 100) {
      setError("Tên Task không quá 100 ký tự");
      return;
    }

    addTask({
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      task: trimmedTask,
      priority,
      status,
      completed: status === "Done",
    });

    setTask("");
    setPriority("Low");
    setStatus(DEFAULT_STATUS);
    setError("");
    closeForm();
  };

  return (
    <div className="todo-popup" onClick={closeForm}>
      <div
        className="card form-card shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="card-header bg-white border-0 d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Add Task</h4>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={closeForm}
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="task-input" className="form-label">
                Task
              </label>
              <input
                id="task-input"
                type="text"
                className="form-control"
                placeholder="Type your task here..."
                maxLength={100}
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              {error && (
                <small className="text-danger d-block mt-2">{error}</small>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label d-block">Priority</label>
              <div
                className="priority-buttons btn-group"
                role="group"
                aria-label="Priority"
              >
                {TASK_PRIORITIES.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={`btn btn-outline-${item.variant} ${
                      priority === item.value ? "active" : ""
                    }`}
                    onClick={() => setPriority(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label d-block">Status</label>
              <div
                className="priority-buttons btn-group"
                role="group"
                aria-label="Task status"
              >
                {TASK_STATUSES.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={`btn btn-outline-${item.badgeClass} ${
                      status === item.value ? "active" : ""
                    }`}
                    onClick={() => setStatus(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn-primary px-4">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
