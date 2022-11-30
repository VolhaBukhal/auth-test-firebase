import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";

export const useGetTask = () => {
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

  return {
    tasks,
  };
};
