import { Task } from "../types";

type TasklistsProps ={
    tasks:Task[]
}

function Tasklists({tasks}:TasklistsProps) {
  return (
    <div className="task-list">
        <ul>
        {
          tasks.map(task =><li key={task.id}>{task.title}</li>)
        }
      </ul>
    </div>
  )
}

export default Tasklists;