
type TaskInputProps ={
    taskName:string,
    setTaskName:(taskName:string) =>void,
    onEnterKeyDown:(e:React.KeyboardEvent<HTMLInputElement>) => void

}
function AddTasks({onEnterKeyDown,taskName,setTaskName}:TaskInputProps) {
  return (
    <div className="task-input">
      <label htmlFor="task-input">Add task</label>
      <input type="text" 
        id='task-input' 
        value={taskName} 
        onChange={(e)=> setTaskName(e.target.value)}
        onKeyDown={
          onEnterKeyDown
        }
         />
    </div>
  )
}

export default AddTasks;