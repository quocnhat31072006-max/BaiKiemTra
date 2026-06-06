import { useState } from "react";

const priorities = [
  { label: "High", variant: "outline-danger" },
  { label: "Medium", variant: "outline-warning" },
  { label: "Low", variant: "outline-success" },
];

function TodoForm({ addTask, closeForm }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
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
      id: Date.now(),
      task: trimmedTask,
      priority,
      status: "To Do",
      completed: false,
    });

    setTask("");
    setPriority("Low");
    setError("");
  };

  return (
    <div className="todo-popup">
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
          >
            ✕
          </button>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Task</label>
              <input
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
                {priorities.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`btn btn-${item.variant} ${priority === item.label ? "active" : ""}`}
                    onClick={() => setPriority(item.label)}
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

export default TodoForm;
