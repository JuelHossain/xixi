import {
  Button,
  Group,
  Input,
  NumberInput,
  PasswordInput,
  Stack,
  Title,
} from "@mantine/core";
import {
  IconKey,
  IconLocation,
  IconMail,
  IconPhone,
  IconUserExclamation,
} from "@tabler/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [additional, setAdditional] = useState(false);
  return (
    <Stack className="max-w-md mx-auto shadow-md p-5 dark:bg-neu-9/30">
      <Stack>
        <Title align="center" order={3} className="text-main-5">
          Register Here
        </Title>

        <Stack>
          <Group className="sm:flex-nowrap">
            <Input
              className="w-full"
              icon={<IconUserExclamation />}
              variant="filled"
              placeholder="First Name"
            />
            <Input
              className="w-full"
              icon={<IconUserExclamation />}
              variant="filled"
              placeholder="Last Name"
            />
          </Group>
          <Input
            icon={<IconMail />}
            variant="filled"
            placeholder="Enter Email"
          />
          <PasswordInput
            icon={<IconKey />}
            variant="filled"
            placeholder="Enter Password"
          />
          <PasswordInput
            icon={<IconKey />}
            variant="filled"
            placeholder="Confirm Password"
          />
          {additional && (
            <>
              <NumberInput
                hideControls
                icon={<IconPhone />}
                variant="filled"
                placeholder="Enter  Phone Number"
              />
              <Input
                hideControls
                icon={<IconLocation />}
                variant="filled"
                placeholder="Enter  Address"
              />
            </>
          )}
          <Group>
            <Button
              onClick={() => setAdditional((p) => !p)}
              variant="subtle"
              compact
            >
              I Am Agreed To The Term's And Conditions
            </Button>
          </Group>
          <Button
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
          <Button component={Link} variant="outline" compact to="/login">
            Read Terms & Conditions
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
};

export default Register;
