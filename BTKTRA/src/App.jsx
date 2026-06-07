import { useState } from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TodoForm";
import TaskStatistics from "./components/TaskStatistics";
import { useTasks } from "./hooks/useTasks";

function App() {
  const [showForm, setShowForm] = useState(false);
  const { tasks, loading, error, addTask, deleteTask } = useTasks();

  return (
    <div className="container py-5">
      <div className="task-header p-4 mb-4 rounded-4 shadow-sm">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
          <div>
            <h1 className="mb-1">Task List</h1>
            <p className="text-muted mb-0">
              Quản lý nhiệm vụ, ưu tiên công việc và thêm task mới nhanh chóng.
            </p>
          </div>

          <button
            type="button"
            className="btn btn-purple btn-lg"
            onClick={() => setShowForm((value) => !value)}
          >
            {showForm ? "Close" : "+ Add Task"}
          </button>
        </div>
      </div>

      {error && (
        <div className="alert alert-warning">
          {error} - dữ liệu dự phòng đã được tải.
        </div>
      )}

      {loading ? (
        <div className="text-center py-5 text-muted">
          Đang tải danh sách công việc...
        </div>
      ) : (
        <>
          <TaskStatistics tasks={tasks} />

          <div className="task-list-card card border-0 rounded-4 shadow-sm p-3 mb-4">
            <TaskList tasks={tasks} onDeleteTask={deleteTask} />
          </div>

          {showForm && (
            <>
              <div
                className="modal-backdrop"
                onClick={() => setShowForm(false)}
              />
              <TaskForm
                addTask={addTask}
                closeForm={() => setShowForm(false)}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
