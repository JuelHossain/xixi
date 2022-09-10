import { Card, NavLink, Stack } from "@mantine/core";
import { IconLogout } from "@tabler/icons";
import { signOut } from "firebase/auth";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserButton from "../../Components/Header/Helper/UserButton";
import auth from "../../firebase";
import { userLinks } from "../../utils/links";
export default function UserLinks() {
  const { pathname } = useLocation();

  return (
    <Card withBorder className=" hidden sm:flex flex-col p-0 w-40 ">
      <UserButton />
      {userLinks
        .map((userLink, index) => {
          return (
            <Stack spacing={0} key={Math.random()}>
              {userLink.item
                .filter((item) => !item.fn)
                .map((item) => (
                  <NavLink
                    icon={item.icon}
                    active={item.link === pathname}
                    component={Link}
                    to={item.link}
                    key={Math.random()}
                    label={item.name}
                  />
                ))}
            </Stack>
          );
        })
        .reverse()}
      <NavLink
        icon={<IconLogout className="text-main-5" size={20} />}
        onClick={() => {
          signOut(auth);
        }}
        key={Math.random()}
        label={"Logout"}
      />
    </Card>
  );
}
