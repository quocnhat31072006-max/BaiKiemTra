# Task Manager App

A React + Vite task manager application for creating, deleting, and tracking tasks with priority and status.

![App screenshot](screenshots/app-screenshot.svg)

## Features

- Load task data from `public/data.json` with a fallback local dataset
- Add new tasks with title, priority, and status
- Delete tasks from the list
- Styled task cards with status badges and progress ring indicators
- Modular component structure with reusable presentational components
- Dedicated hook and service layers for data loading and state management

## Screenshot

![Task app screenshot](screenshots/app-screenshot.svg)

## Tech stack

- React 18
- Vite
- Bootstrap 5
- ESLint

## Setup

1. Clone the repository:

```bash
git clone https://github.com/quocnhat31072006-max/BaiKiemTra.git
cd BaiKiemTra/BTKTRA
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal, usually `http://localhost:5173`

## Build

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

- `src/App.jsx` — main application shell and page layout
- `src/components/` — UI components like `TaskList`, `TaskItem`, task badges, and form
- `src/hooks/useTasks.js` — custom hook for task data loading and state management
- `src/services/taskService.js` — fetch layer and fallback data provider
- `src/constants/taskConfig.js` — shared task priority/status settings
- `public/data.json` — seed task data for app initialization

## Notes

- The repository uses a modular architecture to keep UI, data, and behavior separated.
- The screenshot in `screenshots/app-screenshot.svg` illustrates the task list layout and form controls.

## License

This project is provided for educational purposes.
