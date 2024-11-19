type AddButtonProps ={
    onAddTasks:()=> void
}

function AddButton({onAddTasks}:AddButtonProps) {
  return (
    <div className="add-btn">
        <button onClick={
         onAddTasks
      }>Add</button>
    </div>
  )
}

export default AddButton