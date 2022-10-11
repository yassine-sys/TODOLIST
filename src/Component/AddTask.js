import React, { useState } from 'react';
import {Form, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import{addtask} from "../Redux/Action/action";
import { useSelector } from "react-redux";
import { filter } from '../Redux/Action/action';


const AddTask = () => {
  const List = useSelector((state) => state.todoReducer.List);
  const dispatch=useDispatch();
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc.length<=3) {alert("oops min 3 chars")} else 
   {
     dispatch(addtask({ id: Math.max.apply(
      null,
      List.map((item) => item.id+1)
    ), description: desc, isDone: false }));
     setDesc("");
   }
  };
    return (
        <div>
             <Form inline className="inputForm">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>dispatch(filter("All"))}>All</Dropdown.Item>
            <Dropdown.Item onClick={()=>dispatch(filter("Done"))}>Done</Dropdown.Item>
            <Dropdown.Item onClick={()=>dispatch(filter("unDone"))}>Not Done</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form>
      <div>
      <form className="inputBtn"onSubmit={handleSubmit}>
        <input
          focus
          type="text" 
          className="mr-sm-2" 
          placeholder="Add Items"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
         <button className="addtask">Add</button>
      </form>
    </div>
        </div>
    )
}

export default AddTask
