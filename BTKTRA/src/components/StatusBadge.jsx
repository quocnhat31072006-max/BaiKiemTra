import { TASK_STATUSES } from "../constants/taskConfig";

function StatusBadge({ status }) {
  const matchedStatus =
    TASK_STATUSES.find((item) => item.value === status) ?? TASK_STATUSES[0];

  return (
    <span
      className={`badge bg-${matchedStatus.badgeClass} bg-opacity-10 text-${matchedStatus.badgeClass}`}
    >
      {matchedStatus.label}
    </span>
  );
}

export default StatusBadge;
