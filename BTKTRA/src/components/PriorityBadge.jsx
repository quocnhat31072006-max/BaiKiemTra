function PriorityBadge({ priority }) {
  const getColor = () => {
    switch (priority) {
      case "High":
        return "text-danger";
      case "Medium":
        return "text-warning";
      case "Low":
        return "text-success";
      default:
        return "";
    }
  };

  return <span className={`fw-bold ${getColor()}`}>{priority}</span>;
}

export default PriorityBadge;
