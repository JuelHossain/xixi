import { Group, NavLink } from "@mantine/core";
import { IconHome, IconLayoutGrid } from "@tabler/icons";
import { Link, useLocation } from "react-router-dom";
const links = [
  {
    name: "Home",
    link: "",
    icon: <IconHome size={18} />,
  },
  {
    name: "Products",
    link: "products",
    icon: <IconLayoutGrid size={18} />,
  },
  // {
  //   name: "About Us",
  //   link: "about",
  // },
  // {
  //   name: "Contact Us",
  //   link: "contact",
  // },
];
export default function NavLinks({ cls}) {
  const { pathname } = useLocation();
  const path = pathname.substring(1);
  const items = links.map((link) => (
    <NavLink
      component={Link}
      to={`${link.link}`}
      className={
        link.link === path
          ? "bg-main-5 text-white py-[3.5px] font-semibold hover:bg-main-7 duration-300 rounded text-sm"
          : "bg-main-2 text-black py-[3.5px] font-semibold hover:bg-main-3 duration-300 rounded text-sm"
      }
      key={Math.random()}
      label={link.name}
      icon={link.icon}
    />
  ));

  return (
    <Group grow noWrap spacing={"sm"} className={`flex-1 ${cls}`}>
      {items}
    </Group>
  );
}
