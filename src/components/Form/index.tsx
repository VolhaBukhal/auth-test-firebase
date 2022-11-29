import { useState } from "react";
import { IForm } from "./interfaces";

export const Form = ({ title, handleForm }: IForm) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div>
        <input
          type="email"
          value={email}
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          handleForm(email, password);
        }}
      >
        {title}
      </button>
    </>
  );
};
