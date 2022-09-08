import {
  Box,
  Button,
  Card,
  Chip,
  Group,
  Notification,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconKey, IconMail, IconUserExclamation, IconX } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [{ isError, message }, setError] = useState({
    isError: false,
    message: "",
  });
  const { getInputProps, onSubmit, errors, isDirty, clearErrors } = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreed: false,
    },
    validate: {
      firstName: (value) =>
        value.length < 3 && "Name must be at least 3 letters",
      lastName: (value) =>
        value.length < 3 && "Name must be at least 3 letters",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid Email"),
      password: (value, values) =>
        (value.length < 6 && "Password Must be at least six Digits long") ||
        (value !== values.confirmPassword && "Password did not match"),
      confirmPassword: (value, values) =>
        (value.length < 6 && "Password Must be at least six Digits long") ||
        (value !== values.password && "Password did not match"),
      agreed: (value) =>
        value ? null : "You Must Agree To The Term's & Conditions",
    },
  });
  useEffect(() => {
    if (isDirty()) {
      setError({
        isError: false,
        message: "",
      });
    }
  }, [isDirty]);
  return (
    <Card
      withBorder
      radius={"md"}
      className="max-w-md mx-auto shadow-md p-5 dark:bg-neu-9/30"
    >
      <Stack>
        <Title align="center" order={3} className="text-main-5">
          Register Here
        </Title>

        <Stack
          component={"form"}
          onSubmit={(e) => {
            e.preventDefault();
            if (!isDirty()) {
              setError({
                isError: true,
                message: "You Did Not Entered Any Information",
              });
            } else {
              setError({
                isError: false,
                message: "",
              });
              onSubmit((v) => console.log(v))(e);
            }
          }}
        >
          <Group className="xs:flex-nowrap">
            <TextInput
              {...getInputProps("firstName")}
              className="w-full"
              icon={<IconUserExclamation />}
              variant="filled"
              placeholder="First Name"
            />
            <TextInput
              {...getInputProps("lastName")}
              className="w-full"
              icon={<IconUserExclamation />}
              variant="filled"
              placeholder="Last Name"
            />
          </Group>
          <TextInput
            {...getInputProps("email")}
            icon={<IconMail />}
            variant="filled"
            placeholder="Enter Email"
          />
          <PasswordInput
            {...getInputProps("password")}
            icon={<IconKey />}
            variant="filled"
            placeholder="Enter Password"
          />
          <PasswordInput
            {...getInputProps("confirmPassword")}
            icon={<IconKey />}
            variant="filled"
            placeholder="Confirm Password"
          />
          <Box>
            <Group>
              <Chip
                {...getInputProps("agreed", { type: "checkbox" })}
                radius="sm"
                variant="filled"
              >
                Agreed To The Term's & Conditions
              </Chip>
              {Object.keys(errors).length !== 0 && (
                <Button
                  className="hidden xs:flex bg-main-6 hover:bg-main-7 duration-300"
                  compact
                  onClick={clearErrors}
                >
                  Clear Error
                </Button>
              )}
            </Group>
            {errors.agreed && (
              <Text className="p-1" size={"xs"} color={"red"}>
                {errors.agreed}
              </Text>
            )}
          </Box>

          {isError && (
            <Notification
              onClose={() => setError({ isError: false })}
              icon={<IconX size={18} />}
              color="red"
            >
              {message}
            </Notification>
          )}

          <Button
            type="submit"
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
          <Button variant="outline" compact>
            Read Terms & Conditions
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};

export default Register;
