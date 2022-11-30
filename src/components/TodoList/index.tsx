import { AddTodo } from "./AddTodo";
import { DocumentData } from "firebase/firestore";
import { TodoItem } from "./TodoItem";
import { useGetTask } from "hooks/useGetTask";

export const TodoList = () => {
  const { tasks } = useGetTask();

  return (
    <>
      <h3>TodoList</h3>
      <AddTodo />
      <hr />
      {tasks ? (
        tasks.map((item: DocumentData) => <TodoItem key={item.id} {...item} />)
      ) : (
        <p>No tasks...</p>
      )}
    </>
  );
};
