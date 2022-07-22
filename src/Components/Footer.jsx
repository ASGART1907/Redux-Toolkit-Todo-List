import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../Slicer/CreateSlice';

const Footer = () => {
  const todos = useSelector((state) => state.Todos.todos);
  const dispatch = useDispatch();


  const handleClick = (direction) => {
    const parent = direction.parentElement.parentElement;
      parent.classList.toggle("complete");
  }

  return (
    <div className='footer'>
        <ul>
          {
          todos.length <= 0 ? <h4 className='null-list'>Liste Boş</h4> : 
            todos.map(todo => (
              <li 
                key={todo.id} 
                >
              <p>{todo.todo}</p>
              <div className="icons">
                <i
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="fas fa-trash"></i>
                <input
                 type="checkbox" 
                 onChange={(e) => handleClick(e.target)}
                 />
              </div>
          </li>            
            ))
          }
        </ul>
    </div>
  )
}

export default Footer;