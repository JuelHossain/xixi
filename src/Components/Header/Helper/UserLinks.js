import { Button, Menu } from "@mantine/core";
import {
  IconGift,
  IconLayoutList,
  IconLogout,
  IconShoppingCart,
  IconUserCheck,
} from "@tabler/icons";
import { signOut } from "firebase/auth";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase";

const UserLinks = () => {
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
          link: "/user-profile",
          icon: <IconUserCheck size={20} className="text-main-5" />,
        },
        {
          name: "Logout",
          fn: () => {
            signOut(auth);
          },
          icon: <IconLogout size={20} className="text-main-5" />,
        },
      ],
    },
  ];

  return (
    <>
      {userLinks.map((links, index) => {
        return (
          <Fragment key={Math.random()}>
            <Menu.Label className="text-main-5">{links.label}</Menu.Label>
            {links.item.map((item) => (
              <Menu.Item
                component={item?.fn ? Button : Link}
                to={item?.link}
                onClick={item?.fn && item.fn}
                className={`hover:bg-main-0 dark:hover:bg-main-9/20 ${
                  item?.fn && "font-normal"
                }`}
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
    </>
  );
};

export default UserLinks;
