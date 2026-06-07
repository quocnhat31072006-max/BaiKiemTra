function TaskStatistics({ tasks }) {
  const totalTasks = tasks.length;
  const statusCounts = tasks.reduce((accumulator, task) => {
    accumulator[task.status] = (accumulator[task.status] || 0) + 1;
    return accumulator;
  }, {});

  return (
    <div className="task-stats mb-4">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 p-3 rounded-4 border bg-white shadow-sm">
        <div>
          <h2 className="h5 mb-1">Task summary</h2>
          <p className="text-muted mb-0">
            Tổng quan nhanh về trạng thái công việc hiện tại.
          </p>
        </div>

        <div className="d-flex flex-wrap gap-2 align-items-center">
          <span className="badge bg-primary bg-opacity-10 text-primary">
            Tổng: {totalTasks}
          </span>
          <span className="badge bg-secondary bg-opacity-10 text-secondary">
            To Do: {statusCounts["To Do"] || 0}
          </span>
          <span className="badge bg-warning bg-opacity-10 text-warning">
            In Progress: {statusCounts["In Progress"] || 0}
          </span>
          <span className="badge bg-success bg-opacity-10 text-success">
            Done: {statusCounts.Done || 0}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskStatistics;
