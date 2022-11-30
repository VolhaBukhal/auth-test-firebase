import { useState, SyntheticEvent } from "react";

import { doc, deleteDoc, DocumentData, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const TodoItem = ({ id, task, completed }: DocumentData) => {
  const [done, setDone] = useState(completed);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = async (e: SyntheticEvent<HTMLInputElement>) => {
    setEditedTask(e.currentTarget.value);
  };

  const handleToggle = async () => {
    await updateDoc(doc(db, "todos", id), {
      completed: !task.completed,
    });
    setDone(!done);
  };

  const handleDelete = async () => {
    await deleteDoc(doc(db, "todos", id));
  };

  const handleUpdate = async () => {
    await updateDoc(doc(db, "todos", id), {
      task: editedTask,
    });
  };

  return (
    <div>
      <input type="checkbox" checked={done} onChange={handleToggle} />
      <input type="text" value={editedTask} onChange={handleEdit} />
      <button onClick={handleUpdate}>update</button>
      <button onClick={handleDelete}> delete</button>
    </div>
  );
};
