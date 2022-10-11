import{ADD_TASK, EDIT_TASK, FILTER, REMOVE_TASK, TOGGLE}from '../Action/constant'
const initialState={
    List :[
        {id:1,description:"coding with react",isDone:true},
         {id:2,description:"Learn by making ",isDone:false},
          {id:3,description:"Practice Sport",isDone:false},
    ],
    status:"All",
}

export const todoReducer=(state=initialState,{type,payload})=>{
  switch (type) {
      case ADD_TASK:
          return{
              ...state,List:[...state.List,payload]
          }
          case REMOVE_TASK:
            return{
                ...state,List:state.List.filter(el=>el.id!==payload)
            }
          case EDIT_TASK:
              return{
                  ...state,List:state.List.map(el=>el.id===payload.id?{...el, description:payload.description}:el)
              }
              case TOGGLE:
                  return{
                   ...state,List:state.List.map(el=>el.id===payload?{...el, isDone:!el.isDone}:el)
                  }
                  case FILTER:
                      return{
                    ...state,status:payload
                      }

      default:
          return state
  }
}
    