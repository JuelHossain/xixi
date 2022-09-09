import { Avatar, Button, Group, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";

const UserButton = ({ exclass }) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Button
      unstyled
      loading={loading}
      className={`hover:bg-main-2 hover:text-black rounded px-2 py-1 duration-300 ${exclass}`}
    >
      <Group spacing={7}>
        <Avatar
          src={user?.image}
          alt={user?.displayName}
          radius="xl"
          size={20}
        />
        <Text
          weight={500}
          size="sm"
          sx={{
            lineHeight: 1,
          }}
          mr={3}
        >
          {user?.displayName}
        </Text>
        <IconChevronDown size={12} stroke={1.5} />
      </Group>
    </Button>
  );
};

export default UserButton;
