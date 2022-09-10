import {
  Box,
  Button,
  Card,
  Divider,
  Group,
  LoadingOverlay,
  Notification,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useToggle } from "@mantine/hooks";
import { IconAt, IconKey, IconX } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase";
import Error from "./Components/Error";
import SendEmailDialog from "./Components/SendEmailDialog";
import SocialLogin from "./Components/SocialLogin";

const Login = () => {
  const [status, toggle] = useToggle();
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, userLoading, userError] =
    useSignInWithEmailAndPassword(auth);

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
  const submitHandler = onSubmit((v) => {
    signInWithEmailAndPassword(v.email, v.password);
  });
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || "/";



  useEffect(() => {
    if (userError) {
      setError(userError.message);
    }
    if (!userError && user) {
      navigate(from);
      setError("");
    }
  }, [userError, user, navigate, from]);

  return (
    <Card
      withBorder
      radius={"md"}
      className="max-w-md mx-auto shadow-md p-5 dark:bg-neu-9/30"
    >
      <LoadingOverlay visible={userLoading} overlayBlur={2} />
      <Stack>
        <Box>
          <Title align="center" order={3} className="text-main-5">
            Login Here
          </Title>
          <Text align="center" className="text-main-5">
            With Email And Password
          </Text>
        </Box>
        <Stack component={"form"} onSubmit={submitHandler}>
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
          <Error error={error} setError={setError}/>
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
          <SendEmailDialog status={status} toggle={toggle} />
        </Group>
      </Stack>
      <Divider my="xs" label="Or" labelPosition="center" />
      <SocialLogin />
    </Card>
  );
};

export default Login;
