import React, { useContext, useEffect, useState } from "react";
import LoginFrom from "./components/LoginFrom";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";

function App() {
  const { store } = useContext(Context);

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  async function getUsers() {
    try {
      const res = await UserService.fetchUsers();
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const UserListJSX = () => (
    <>
      <button onClick={getUsers}>Get Users</button>
      {users?.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </>
  );

  const authJSX = (
    <>
      <h1>Authorized: {store.user.email}</h1>
      <h1>{store.user.isActivated ? "Activated" : "Not Activated"}</h1>
      <button onClick={() => store.logout()}>Logout</button>
      <UserListJSX />
    </>
  );

  const unauthJSX = (
    <>
      <h1>Not Authorized</h1>
      <LoginFrom />
      <UserListJSX />
    </>
  );

  return (
    <>
      {store.isLoading ? <p>Loading...</p> : store.isAuth ? authJSX : unauthJSX}
    </>
  );
}

export default observer(App);
