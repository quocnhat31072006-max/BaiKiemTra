import { useEffect, useState } from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import TodoForm from "./components/TodoForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Không thể tải dữ liệu tasks.");
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setFetchError(error.message || "Lỗi khi tải dữ liệu.");
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowForm(false);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

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

      {fetchError && <div className="alert alert-danger">{fetchError}</div>}

      {loading ? (
        <div className="text-center py-5 text-muted">
          Đang tải danh sách công việc...
        </div>
      ) : (
        <>
          <div className="task-list-card card border-0 rounded-4 shadow-sm p-3 mb-4">
            <TaskList tasks={tasks} onDeleteTask={deleteTask} />
          </div>

          {showForm && (
            <>
              <div
                className="modal-backdrop"
                onClick={() => setShowForm(false)}
              />
              <TodoForm
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
