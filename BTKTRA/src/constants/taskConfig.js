export const TASK_PRIORITIES = [
  { value: "High", label: "High", variant: "danger" },
  { value: "Medium", label: "Medium", variant: "warning" },
  { value: "Low", label: "Low", variant: "success" },
];

export const TASK_STATUSES = [
  {
    value: "To Do",
    label: "To Do",
    badgeClass: "secondary",
    ringClass: "ring-todo",
  },
  {
    value: "In Progress",
    label: "In Progress",
    badgeClass: "warning",
    ringClass: "ring-progress",
  },
  {
    value: "Done",
    label: "Done",
    badgeClass: "success",
    ringClass: "ring-done",
  },
];

export const DEFAULT_STATUS = TASK_STATUSES[0].value;

export const STATUS_OPTIONS = TASK_STATUSES.map(({ value, label }) => ({
  value,
  label,
}));
