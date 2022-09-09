import { Button, Group, Popover, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconMail } from "@tabler/icons";
import React from "react";

const SendEmailDialog = ({ status, toggle }) => {
  const { getInputProps, onSubmit, reset } = useForm({
    initialValues: { email: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid Email"),
    },
  });

  return (
    <Popover withArrow position="top">
      <Popover.Target>
        <Button
          variant="outline"
          compact
          to="/register"
          onClick={() => toggle()}
        >
          Forgot Password?
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Send Password Reset Email
        </Text>
        <Group
          noWrap
          spacing={5}
          align={"start"}
          component={"form"}
          onSubmit={onSubmit((v) => {
            console.log(v);
            reset();
          })}
        >
          <TextInput
            {...getInputProps("email")}
            icon={<IconMail />}
            variant="filled"
            placeholder="Enter Email"
          />
          <Button type="submit" className="bg-main-5">
            Send
          </Button>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
};

export default SendEmailDialog;
