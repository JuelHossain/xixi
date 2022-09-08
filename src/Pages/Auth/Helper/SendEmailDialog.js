import { Button, Dialog, Group, Text, TextInput } from "@mantine/core";
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
    <Dialog
      position={{ top: 20, right: 20 }}
      opened={status}
      withCloseButton
      onClose={() => toggle()}
      size="lg"
      radius="md"
    >
      <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
        Send Password Reset Email
      </Text>
      <Group
        className="items-start"
        component={"form"}
        align="flex-end"
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
    </Dialog>
  );
};

export default SendEmailDialog;
