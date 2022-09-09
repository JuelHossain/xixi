import { Box, PasswordInput, Popover, Progress, Text } from "@mantine/core";
import { IconCheck, IconKey, IconX } from "@tabler/icons";
import React, { useEffect, useState } from "react";
const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

const SpPasswordInput = ({ getInputProps, value, error }) => {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const strength = getStrength(value);
  useEffect(() => {
    if (strength === 100) {
      setPopoverOpened(false);
    }
    if (error && error !== "Password Doesn't Match") {
      setPopoverOpened(true);
    }
  }, [strength, error]);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  return (
    <Popover
      opened={popoverOpened}
      position="bottom"
      width="target"
      transition="pop"
      shadow={"lg"}
    >
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            {...getInputProps("password")}
            icon={<IconKey />}
            variant="filled"
            placeholder="Enter Password"
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress
          color={color}
          value={strength}
          size={5}
          style={{ marginBottom: 10 }}
        />
        <PasswordRequirement
          label="Includes at least 6 characters"
          meets={value?.length > 5}
        />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
};

export default SpPasswordInput;
function getStrength(password) {
  let multiplier = password?.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function PasswordRequirement({ meets, label }) {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}{" "}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}
