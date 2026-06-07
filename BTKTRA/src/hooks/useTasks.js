import { useCallback, useEffect, useState } from "react";
import { fetchTasks, getDefaultTasks } from "../services/taskService";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadTasks() {
      try {
        const data = await fetchTasks();

        if (active) {
          setTasks(data);
        }
      } catch (loadError) {
        if (active) {
          setError(
            loadError.message || "Lỗi không xác định khi tải danh sách nhiệm vụ."
          );
          setTasks(getDefaultTasks());
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadTasks();
    return () => {
      active = false;
    };
  }, []);

  const addTask = useCallback((newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  }, []);

  const deleteTask = useCallback((taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  }, []);

  return {
    tasks,
    loading,
    error,
    addTask,
    deleteTask,
  };
}
