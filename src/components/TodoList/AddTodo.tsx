import { useState, SyntheticEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const AddTodo = () => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (task !== "") {
      try {
        const taskRef = await addDoc(collection(db, "todos"), {
          task,
          completed: false,
        });
        setTask("");
      } catch (err) {
        console.error();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input type="submit" value="Add task" />
    </form>
  );
};
