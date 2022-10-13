import { AppShell, Container, Header, useMantineTheme } from "@mantine/core";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppFooter from "./Components/Header/AppFooter";
import AppHeader from "./Components/Header/AppHeader";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home/home";
import Cart from "./Pages/User/Cart";
import Orders from "./Pages/User/Orders";
import Profile from "./Pages/User/Profile";
import User from "./Pages/User/User";
import WishList from "./Pages/User/WishList";
import { setRootColor } from "./utils/colors";

export default function MainApp() {
  const { colors } = useMantineTheme();

  useEffect(() => {
    setRootColor(colors);
  }, [colors]);
  return (
    <AppShell
      unstyled
      className="min-h-screen flex flex-col justify-between gap-10"
      navbarOffsetBreakpoint="sm"
      header={
        <Header>
          <AppHeader />
        </Header>
      }
      footer={<AppFooter />}
    >
      <Container className="mt-28 sm:mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />}>
            <Route path="profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<WishList />} />
          </Route>
        </Routes>
      </Container>
    </AppShell>
  );
}
