import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button} from "react-bootstrap";
import { edittask, toggle, removetask } from '../Redux/Action/action';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Task = ({ Task }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newdesc, setNewdesc] = useState(Task.description);
  const dispatch = useDispatch();
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  const [state, setState] = React.useState({
    checkedG: Task.isDone,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleCheck = () => dispatch(toggle(Task.id));
  return (
     <tr>
      <td>
        {Task.id}
      </td>
      <td>
        {Task.description}
      </td>
      <td>
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={(event)=>{handleChange(event); handleCheck()}} name="checkedG" />}
        label={`${Task.isDone?"Done":"Not Done"}`}
      />
      </td>
      <td>
      <Button variant="info" className="btnEdit" 
       onClick={handleShow}>
       Edit
       </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit List</Modal.Title>
        </Modal.Header>
        <input
          type="text"
          value={newdesc}
          onChange={(e) => setNewdesc(e.target.value)}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={()=>{dispatch(edittask(Task.id,newdesc)) ;handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="danger" className="btnDelete"
       onClick={()=>dispatch(removetask(Task.id))}>
       Delete
       </Button> 

      </td>
     </tr>
  );
};

export default Task;
