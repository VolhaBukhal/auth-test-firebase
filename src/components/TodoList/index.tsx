import { useEffect, useState, SyntheticEvent } from "react";
import { AddTodo } from "./AddTodo";
import {
  collection,
  query,
  onSnapshot,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { TodoItem } from "./TodoItem";
import { db } from "../../firebase";

export const TodoList = () => {
  const [tasks, setTasks] = useState<DocumentData>([]);
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tasksArr: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        tasksArr.push({ ...doc.data(), id: doc.id });
      });
      setTasks(tasksArr);
    });
    return () => unsub();
  });

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
