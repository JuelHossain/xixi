import { Button, Divider, NavLink, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../../firebase";
import { userLinks } from "../../../utils/links";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { getInputProps } = useForm({
    initialValues: {
      displayName: user?.displayName,
    },
  });
  const { pathname } = useLocation();
  return (
    <Stack spacing={0} className="w-40">
      {userLinks
        .map((userLink, index) => {
          return (
            <Stack spacing={0} key={Math.random()}>
              {index === userLinks.length - 1 || (
                <Divider className="my-1" key={Math.random()} />
              )}
              {userLink.item.map((item) => (
                <NavLink
                  component={item.fn ? Button : Link}
                  to={item.link}
                  onClick={item.fn}
                  key={Math.random()}
                  label={item.name}
                  className={item.fn && "font-normal"}
                />
              ))}
            </Stack>
          );
        })
        .reverse()}
    </Stack>
  );
};

export default Profile;
