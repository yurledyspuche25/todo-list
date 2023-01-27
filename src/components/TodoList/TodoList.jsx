import { TodoFilters } from "../TodoFilter/TodoFilter";
import { Todo } from "../Todo/Todo";

const TodoList = ({ todos, handleSetComplete, handleDelete, activeFilter,showActiveTodos,
  showAllTodos, showCompletedTodos, handleClearComplete }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleSetComplete={handleSetComplete}
          />
        );
      })}
      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
        showActiveTodos ={showActiveTodos}
      />
    </div>
  );
};
export { TodoList };
