import { Button, Menu } from "@mantine/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { userLinks } from "../../../utils/links";

const UserLinks = () => {
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
