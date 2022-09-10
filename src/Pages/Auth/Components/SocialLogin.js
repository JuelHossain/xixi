import { Button, Group, Stack, Title } from "@mantine/core";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../Components/Shared/Loading";
import auth from "../../../firebase";
import Error from "./Error";

const SocialLogin = () => {
  const [error, setError] = useState("");
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || "/";
  useEffect(() => {
    if (googleError && facebookError) {
      setError(googleError.message || facebookError.message);
    }
    if (googleUser || facebookUser) {
      navigate(from);
    }
  }, [googleError, facebookError, googleUser, facebookUser, navigate, from]);
  return (
    <Stack className="bg-main-5/20 rounded p-2">
      <Loading visible={googleLoading || facebookLoading} />
      <Title align="center" order={3} className="text-main-5">
        Login With Social
      </Title>
      <Error error={error} setError={setError} />
      <Group position="center">
        <Button
          onClick={() => signInWithGoogle()}
          compact
          variant="filled"
          className="bg-main-5 hover:bg-main-7 duration-300"
          leftIcon={<IconBrandGoogle size={"20"} />}
        >
          Login With Google
        </Button>
        <Button
          onClick={() => signInWithFacebook()}
          compact
          variant="filled"
          className="bg-main-5 hover:bg-main-7 duration-300"
          leftIcon={<IconBrandFacebook size={"20"} />}
        >
          Login With Facebook
        </Button>
      </Group>
    </Stack>
  );
};

export default SocialLogin;
