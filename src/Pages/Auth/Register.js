import {
  Button,
  Group,
  Input,
  PasswordInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconAt, IconKey } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Stack className="max-w-md mx-auto shadow-md p-5 dark:bg-neu-9/30">
      <Stack>
        <box>
          <Title align="center" order={3} className="text-main-5">
            Register Here
          </Title>
          <Text align="center" className="text-main-5">
            With Your Details
          </Text>
        </box>
        <Stack>
          <Input
            icon={<IconAt />}
            variant="filled"
            placeholder="Your First Name"
          />
          <Input
            icon={<IconAt />}
            variant="filled"
            placeholder="Your Last Name"
          />
          <Input icon={<IconAt />} variant="filled" placeholder="Your email" />
          <PasswordInput
            icon={<IconKey />}
            variant="filled"
            placeholder="Your Password"
          />
          <Button
            variant="filled"
            className="bg-main-5 hover:bg-main-7 duration-300"
          >
            Register
          </Button>
        </Stack>
        <Group position="center">
          <Button component={Link} variant="outline" compact to="/login">
            Login Here
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
};

export default Register;
