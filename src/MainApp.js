import { AppShell, Container } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import AppFooter from "./Components/Header/AppFooter";
import AppHeader from "./Components/Header/AppHeader";
import Home from "./Pages/Home/home";

export default function MainApp() {
  return (
    <AppShell
      unstyled
      className="min-h-screen flex flex-col justify-between gap-10"
      navbarOffsetBreakpoint="sm"
      header={<AppHeader />}
      footer={<AppFooter />}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Container>
    </AppShell>
  );
}
