
import React, { useState } from 'react';
import './App.css'
import {Task} from './types';
import AddTasks from './components/AddTasks';
import AddButton from './components/AddButton';
import Tasklists from './components/Tasklists';
import TasksNumber from './components/TasksNumber';




function App() {
  // update task
  const [taskName,setTaskName] = useState('');
  
  // update tasks list
   const [tasks,setTasks] = useState<Task[]>([])

   // add tasks function
   const onAddTasks = () =>{
         const trimtaskName = taskName.trim();
         if(!trimtaskName) return;
         setTasks([
          ...tasks,{
            id:Date.now(),
            title:trimtaskName,
            completionStatus:true
          }
         ])
         setTaskName('')
   }

   // use enter key to add task
   const onEnterKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) =>{
           if(e.key ==="Enter"){
            onAddTasks();
          }
   }
  return (
    <>  
      <h1>These are my tasks!</h1>
      <TasksNumber count={tasks.length}/>
      <AddTasks onEnterKeyDown={onEnterKeyDown} taskName={taskName} setTaskName={setTaskName}/>
      <AddButton onAddTasks={onAddTasks}/>
      <Tasklists tasks={tasks}/>
    </>
  )
}

export default App
