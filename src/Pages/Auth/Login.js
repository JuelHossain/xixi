import {
  Box,
  Button,
  Card,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useToggle } from "@mantine/hooks";
import { IconAt, IconKey } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";
import SendEmailDialog from "./Helper/SendEmailDialog";
import SocialLogin from "./Helper/SocialLogin";

const Login = () => {
  const [status, toggle] = useToggle();
  const { getInputProps, onSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid Email"),
      password: (value, values) =>
        value.length < 6 && "Password Must be at least six Digits long",
    },
  });

  return (
    <Card
      withBorder
      radius={"md"}
      className="max-w-md mx-auto shadow-md p-5 dark:bg-neu-9/30"
    >
      <Stack>
        <Box>
          <Title align="center" order={3} className="text-main-5">
            Login Here
          </Title>
          <Text align="center" className="text-main-5">
            With Email And Password
          </Text>
        </Box>
        <Stack component={"form"} onSubmit={onSubmit((v) => console.log(v))}>
          <TextInput
            icon={<IconAt />}
            variant="filled"
            placeholder="Your email"
            {...getInputProps("email")}
          />
          <PasswordInput
            {...getInputProps("password")}
            icon={<IconKey />}
            variant="filled"
            placeholder="Your Password"
          />
          <Button
            type="submit"
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
          <Button
            variant="outline"
            compact
            to="/register"
            onClick={() => toggle()}
          >
            Forgot Password?
          </Button>
          <SendEmailDialog status={status} toggle={toggle} />
        </Group>
      </Stack>
      <Divider my="xs" label="Or" labelPosition="center" />
      <SocialLogin />
    </Card>
  );
};

export default Login;
