import { Avatar, Button, Group, Menu, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";
import UserLinks from "./UserLinks";

export default function UserMenu() {
  const [user, loading, error] = useAuthState(auth);
  const [, { toggle }] = useDisclosure(false);

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
          className={
            "hover:bg-main-2 hover:text-black rounded px-2 py-1 duration-300"
          }
        >
          <Group spacing={7}>
            <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
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
