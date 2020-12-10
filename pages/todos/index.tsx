import {useDispatch, useSelector} from 'react-redux';
import {selectTodos} from "../../store";
import {TodoItem} from "../../types/todos.types";
import {useEffect} from "react";
import RequireAuthHOC from "../../HOCs/require-auth.hoc";
import {fetchTodosThunk} from "../../store/todos.store";

const TodosPage = () => {
  const todos: TodoItem[] = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  return (
    <div>
      <li>
        {todos.map(item => (
          <li key={item.id}>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </li>
        ))}
      </li>
    </div>
  );
};

export default RequireAuthHOC(TodosPage);
