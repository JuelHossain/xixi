import { Card, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const Profile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const { getInputProps } = useForm({
    initialValues: {
      displayName: user?.displayName,
      email: user?.email,
      verified: user?.verified ? "Verified" : "Not Verified",
      phoneNumber: user?.phoneNumber || "Not Available",
    },
  });
  return (
    <Card className="flex-1" withBorder>
      <Group>
        <TextInput
          readOnly
          variant="filled"
          label="Full Name:"
          {...getInputProps("displayName")}
        />
        <TextInput
          readOnly
          variant="filled"
          label="Email Address:"
          {...getInputProps("email")}
        />
        <TextInput
          readOnly
          variant="filled"
          label="Phone Number:"
          {...getInputProps("phoneNumber")}
        />
        <TextInput
          readOnly
          variant="filled"
          label="Status:"
          {...getInputProps("verified")}
        />
      </Group>
    </Card>
  );
};

export default Profile;
