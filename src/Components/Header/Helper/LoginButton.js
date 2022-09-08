import { Group, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconLogin } from "@tabler/icons";
import { Link, useMatch } from "react-router-dom";

const LoginButton = () => {
  const login = useMatch("/login");
  const register = useMatch("/register");
  return (
    <UnstyledButton
      component={Link}
      to="/login"
      className={`  rounded px-2 py-1 duration-300 ${
        login || register
          ? "bg-main-5 text-white hover:bg-main-7"
          : "hover:bg-main-2 hover:text-black"
      }`}
    >
      <Group spacing={7}>
        <IconLogin size={20} />
        <Text
          weight={500}
          size="sm"
          sx={{
            lineHeight: 1,
          }}
          mr={3}
        >
          Login/Register
        </Text>
        <IconChevronDown size={12} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
};

export default LoginButton;
