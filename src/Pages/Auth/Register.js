import {
  Box,
  Button,
  Card,
  Chip,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconKey, IconMail, IconUserExclamation } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase";
import Error from "./Components/Error";
import SpPasswordInput from "./Components/SpPasswordInput";

const Register = () => {
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, userLoading, userError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const { getInputProps, onSubmit, errors, isDirty, clearErrors, values } =
    useForm({
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
        password: (value, values) => {
          if (
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value)
          ) {
            if (value !== values.confirmPassword) {
              return "Password Doesn't Match";
            }
          } else {
            return "Please Follow The Password Requirements";
          }
        },
        confirmPassword: (value, values) => {
          if (value === "") {
            return "Please Confirm Your Password";
          }
          if (value !== values.password) {
            return "Password Doesn't Match";
          }
        },
        agreed: (value) =>
          value ? null : "You Must Agree To The Term's & Conditions",
      },
    });

  const navigate = useNavigate();

  useEffect(() => {
    if (isDirty()) {
      setError("");
    }
    if (userError || updateError) {
      setError(userError.message || updateError.message);
    }
    if (!userLoading && !userError && user) {
      navigate("/");
    }
  }, [isDirty, user, userLoading, userError, updateError, navigate]);

  const registerHandler = (e) => {
    e.preventDefault();
    if (!isDirty()) {
      setError("You Did Not Entered Any Information");
    } else {
      setError("");
      onSubmit(async (v) => {
        const { firstName, lastName, email, password } = v;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: `${firstName} ${lastName}` });
      })(e);
    }
  };
  return (
    <Card
      withBorder
      radius={"md"}
      className="max-w-md mx-auto shadow-md p-5 dark:bg-neu-9/30"
    >
      <Loading visible={userLoading || updating} />

      <Stack>
        <Title align="center" order={3} className="text-main-5">
          Register Here
        </Title>

        <Stack component={"form"} onSubmit={registerHandler}>
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
          <SpPasswordInput
            getInputProps={getInputProps}
            value={values?.password}
            error={errors?.password}
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
          <Error error={error} setError={setError} />
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
