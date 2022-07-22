import { useState } from 'react';
import { addTodo } from '../Slicer/CreateSlice';
import { useSelector,useDispatch } from 'react-redux';
import { v4 as uuidv4} from 'uuid';

const Header = () => {
  const [todo,setTodo] = useState("");

  const dispatch = useDispatch();

  const newTodo = () => {
    const newTodo = {
      id:uuidv4(),
      todo:todo,
    }

    dispatch(addTodo(newTodo));
    setTodo("");
  }

  return (
    <div className='header'>
        <h3 className='title'>Todo List</h3>
        <div className="inputs">
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter todo...' required/>
            <button onClick={() => newTodo()}>Ekle</button>
        </div>
    </div>
  )
}

export default Header;