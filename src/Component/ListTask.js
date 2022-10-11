import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { Table } from "react-bootstrap";


const ListTask = () => {
  const List = useSelector((state) => state.todoReducer.List);
  const status = useSelector(state => state.todoReducer.status)
  return (
    <div>
      <Table striped bordered hover size="sm" variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {status==="All"?List.map((task) => (
        <Task
          key={task.id}
          Task={task}
        />
      )):status==="Done"?List.filter(el=>el.isDone===true).map((task) => (
        <Task
          key={task.id}
          Task={task}
        />)):List.filter(el=>el.isDone===false).map((task) => (
          <Task
            key={task.id}
            Task={task}/>))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListTask;
