import {
  Button,
  Divider,
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
import SocialLogin from "./Helper/SocialLogin";

const Login = () => {
  return (
    <Stack className="max-w-md mx-auto shadow-md p-5 dark:bg-neu-9/30">
      <Stack>
        <box>
          <Title align="center" order={3} className="text-main-5">
            Login Here
          </Title>
          <Text align="center" className="text-main-5">
            With Email And Password
          </Text>
        </box>
        <Stack>
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
            Login
          </Button>
        </Stack>
        <Group position="center">
          <Button component={Link} variant="outline" compact to="/register">
            Register Here
          </Button>
          <Button variant="outline" compact to="/register">
            Forgot Password?
          </Button>
        </Group>
      </Stack>
      <Divider my="xs" label="Or" labelPosition="center" />
      <SocialLogin />
    </Stack>
  );
};

export default Login;
