import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconGift,
  IconLayoutList,
  IconLogout,
  IconShoppingCart,
  IconUserCheck,
} from "@tabler/icons";
import { Fragment } from "react";

const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
};

export default function UserMenu() {
  const [, { toggle }] = useDisclosure(false);
  const userLinks = [
    {
      label: "Shopping",
      item: [
        {
          name: "Shopping Cart",
          link: "/user-cart",
          icon: <IconShoppingCart size={20} className="text-main-5" />,
        },
        {
          name: "Your Orders",
          link: "/user-orders",
          icon: <IconLayoutList size={20} className="text-main-5" />,
        },
        {
          name: "Wish List",
          link: "/user-wishlist",
          icon: <IconGift size={20} className="text-main-5" />,
        },
      ],
    },
    {
      label: "Settings",
      item: [
        {
          name: "Profile",
          link: "/profile",
          icon: <IconUserCheck size={20} className="text-main-5" />,
        },
        {
          name: "Logout",
          link: "/Logout",
          icon: <IconLogout size={20} className="text-main-5" />,
        },
      ],
    },
  ];

  return (
    <Menu
      width={260}
      position="bottom-end"
      transition="pop-top-right"
      onClose={toggle}
      onOpen={toggle}
    >
      <Menu.Target>
        <UnstyledButton
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
              {user.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {userLinks.map((links, index) => {
          return (
            <Fragment key={Math.random()}>
              <Menu.Label className="text-main-5">{links.label}</Menu.Label>
              {links.item.map((item) => (
                <Menu.Item
                  className="hover:bg-main-0 dark:hover:bg-main-9/20"
                  key={Math.random()}
                  icon={item.icon}
                >
                  {item.name}
                </Menu.Item>
              ))}
              {index === userLinks.length - 1 || <Menu.Divider />}
            </Fragment>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}
