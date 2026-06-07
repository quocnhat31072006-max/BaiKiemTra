function EmptyState() {
  return (
    <div className="text-center py-5 text-muted">
      <p className="fs-5 mb-2">Không có nhiệm vụ nào trong danh sách.</p>
      <p className="mb-0">
        Nhấn nút "Add Task" để tạo nhiệm vụ mới và quản lý tiến độ.
      </p>
    </div>
  );
}

export default EmptyState;
