import { Center, Group, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconLogin } from "@tabler/icons";
import React from "react";

const LoginButton = () => {
  return (
    <UnstyledButton
      className={
        "hover:bg-main-2 hover:text-black rounded px-2 py-1 duration-300"
      }
    >
      <Group spacing={7}>
          <IconLogin size={20} />
        <Text
          weight={500}
          size="sm"
          sx={{
            lineHeight: 1,
          }}
          mr={3}
        >
          Login/Register
        </Text>
        <IconChevronDown size={12} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
};

export default LoginButton;
