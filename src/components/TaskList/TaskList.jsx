/* eslint-disable react/prop-types */
//import React from 'react'

import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FaildTask from "./FaildTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="mt-10 h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full">
        {data.tasks.map((e, id) =>{
            if(e.newTask){
                //console.log(NewTask)
                return <NewTask key={id} data={e}/>
            }
            else if(e.active){
                //console.log(AcceptTask)
                return <AcceptTask key={id} data={e}/>
            }
            else if(e.completed){
                return <CompleteTask key={id} data={e}/>
            }
            else if(e.failed){
                return <FaildTask key={id} data={e}/>
            }
        })}
        
    </div>
  )
}

export default TaskList
