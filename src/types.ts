type Priority = 'Low pririty'|'Medium priority'| 'High priority'|'Critical priority'
export type Task = {
        id:number,
        title:string,
        completionStatus:boolean,
        priority? : Priority
}