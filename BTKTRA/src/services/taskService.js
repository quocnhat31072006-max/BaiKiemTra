import fallbackTasks from "../data/data.js";

export async function fetchTasks() {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error(`Không thể tải dữ liệu: ${response.status}`);
  }

  return await response.json();
}

export const getDefaultTasks = () => fallbackTasks;
