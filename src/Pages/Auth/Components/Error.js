import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import React from "react";

const Error = ({ error, setError }) => {
  return (
    error && (
      <Notification
        onClose={() => setError("")}
        icon={<IconX size={18} />}
        color="red"
      >
        {error}
      </Notification>
    )
  );
};

export default Error;
