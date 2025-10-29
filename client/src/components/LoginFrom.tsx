import React, { FC, useState } from "react";

const LoginFrom: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

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
      <button>Login</button>
      <button>Registration</button>
    </div>
  );
};

export default LoginFrom;
