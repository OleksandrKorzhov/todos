import { useSelector } from 'react-redux';
import {selectTodos} from "../../store";
import {TodoItem} from "../../types/todos.types";

const TodosPage = () => {
  const todos: TodoItem[] = useSelector(selectTodos);

  return (
    <div>
      <li>
        {todos.map(item => (
          <li key={'todo_id'}>name</li>
        ))}
      </li>
    </div>
  );
};

export default TodosPage;
