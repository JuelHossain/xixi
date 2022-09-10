import { Avatar, Button, Group, Text } from "@mantine/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";

const UserButton = ({ exclass }) => {
  const [user, loading] = useAuthState(auth);

  return (
    <Button
      unstyled
      loading={loading}
      className={`bg-main-2 dark:bg-main-8/50  rounded px-4 py-2 duration-300 mb-2 hover:bg-main-3 dark:text-main-2`}
    >
      <Group spacing={7}>
        <Avatar
          src={user?.photoURL}
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
        {/* <IconCircleCheck size={12} stroke={1.5} /> */}
      </Group>
    </Button>
  );
};

export default UserButton;
