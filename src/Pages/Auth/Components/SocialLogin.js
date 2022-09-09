import { Button, Group, Stack, Title } from "@mantine/core";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons";
import React from "react";

const SocialLogin = () => {
  return (
    <Stack className="bg-main-5/20 rounded p-2">
      <Title align="center" order={3} className="text-main-5">
        Login With Social
      </Title>
      <Group position="center">
        <Button
          compact
          variant="filled"
          className="bg-main-5 hover:bg-main-7 duration-300"
          leftIcon={<IconBrandGoogle size={"20"} />}
        >
          Login With Google
        </Button>
        <Button
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
