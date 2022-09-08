import {
  Button,
  Chip,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconKey, IconMail, IconUserExclamation } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const { getInputProps, onSubmit } = useForm({
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
        value ? null : "You Must Agree To The Term's And Conditions",
    },
  });
  return (
    <Stack className="max-w-md mx-auto shadow-md p-5 dark:bg-neu-9/30">
      <Stack>
        <Title align="center" order={3} className="text-main-5">
          Register Here
        </Title>

        <Stack component={"form"} onSubmit={onSubmit((v) => console.log(v))}>
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

          <Chip
            {...getInputProps("agreed", { type: "checkbox" })}
            radius="sm"
            variant="filled"
          >
            Agreed To The Term's & Conditions
          </Chip>

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
    </Stack>
  );
};

export default Register;
