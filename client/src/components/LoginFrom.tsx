import React, { FC, useContext, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const LoginFrom: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { store } = useContext(Context);

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        type="text"
        placeholder="Password"
      />
      <button onClick={() => store.login(email, password)}>Login</button>
      <button onClick={() => store.registration(email, password)}>
        Registration
      </button>
    </div>
  );
};

export default observer(LoginFrom);
