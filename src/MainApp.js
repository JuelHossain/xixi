import { AppShell, Container } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import AppFooter from "./Components/Header/AppFooter";
import AppHeader from "./Components/Header/AppHeader";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home/home";
import Profile from "./Pages/User/Profile/Profile";

export default function MainApp() {
  return (
    <AppShell
      unstyled
      className="min-h-screen flex flex-col justify-between gap-10"
      navbarOffsetBreakpoint="sm"
      header={<AppHeader  />}
      footer={<AppFooter />}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/user-profile" element={<Profile />}></Route>
        </Routes>
      </Container>
    </AppShell>
  );
}
