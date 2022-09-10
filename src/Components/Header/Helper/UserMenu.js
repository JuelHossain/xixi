import { Avatar, Button, Group, Menu, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import auth from "../../../firebase";
import UserLinks from "./UserLinks";

export default function UserMenu() {
  const [user, loading] = useAuthState(auth);
  const [, { toggle }] = useDisclosure(false);
  const { pathname } = useLocation();

  return (
    <Menu
      width={260}
      position="bottom-end"
      transition="pop-top-right"
      onClose={toggle}
      onOpen={toggle}
    >
      <Menu.Target>
        <Button
          unstyled
          loading={loading}
          className={`  rounded px-2 py-1 duration-300 ${
            pathname.includes("user")
              ? "bg-main-5 text-white hover:bg-main-7"
              : "hover:bg-main-2 hover:text-black"
          }`}
        >
          <Group spacing={7}>
            <Avatar
              src={user?.photoURL}
              alt={user?.displayName}
              radius="xl"
              size={20}
            />
            <Text
              weight={500}
              size="sm"
              sx={{
                lineHeight: 1,
              }}
              mr={3}
            >
              {user?.displayName}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <UserLinks />
      </Menu.Dropdown>
    </Menu>
  );
}
