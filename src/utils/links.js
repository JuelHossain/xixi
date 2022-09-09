import {
  IconGift,
  IconLayoutList,
  IconLogout,
  IconShoppingCart,
  IconUserCheck,
} from "@tabler/icons";
import { signOut } from "firebase/auth";
import auth from "../firebase";

export const userLinks = [
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
