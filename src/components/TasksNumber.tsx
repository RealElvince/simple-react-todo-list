type TasksNumberProps ={
    count:number
}

function TasksNumber({count}:TasksNumberProps) {
  return (
    <div>
        <h1>The number of tasks are:{count}</h1>
    </div>
  )
}

export default TasksNumber