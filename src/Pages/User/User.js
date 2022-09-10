import { Group } from "@mantine/core";
import { signOut } from "firebase/auth";
import React from "react";
import { Outlet } from "react-router-dom";
import auth from "../../firebase";
import RequireAuth from "../Auth/RequireAuth";
import UserLinks from "./UserLinks";

const User = () => {
  return (
    <RequireAuth>
      <Group align={"start"}>
        <UserLinks signOut={signOut} auth={auth} />
        <Outlet />
      </Group>
    </RequireAuth>
  );
};

export default User;
