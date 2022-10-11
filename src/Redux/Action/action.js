import{ADD_TASK, EDIT_TASK, FILTER, REMOVE_TASK, TOGGLE}from './constant';

export const addtask=(newtask)=>{
    return {  type:ADD_TASK,
      payload:newtask}
  }
  export const removetask=(id)=>{
      return {  type:REMOVE_TASK,
        payload:id}
    }
    export const edittask=(id, description)=>{
      return{ type:EDIT_TASK,
        payload:{id,description}
      }
    }
    export const toggle=(id)=>{
      return{type:TOGGLE,
        payload:id
        
      }
    }
    export const filter=(status)=>{
        return{type:FILTER,
          payload:status
          
    }
    }