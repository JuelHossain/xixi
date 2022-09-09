import { Navbar } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import UserButton from "../../../Components/Header/Helper/UserButton";
import auth from "../../../firebase";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { getInputProps } = useForm({
    initialValues: {
      displayName: user?.displayName,
    },
  });
  return (
    <Navbar width={{ base: 300 }} height={500} p="xs">
      <Navbar.Section>
        <UserButton exclass={"w-full py-5"} />
      </Navbar.Section>
    </Navbar>
  );
};

export default Profile;
