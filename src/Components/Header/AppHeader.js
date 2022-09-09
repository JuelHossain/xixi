import { Box, Container, Group } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import ChangeTheme from "./Helper/ChangeTheme";
import LoginButton from "./Helper/LoginButton";
import Logo from "./Helper/Logo";
import NavLinks from "./Helper/NavLinks";
import UserMenu from "./Helper/UserMenu";

export default function HeaderTabs() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Box className=" shadow shadow-neu-3 dark:shadow-neu-8 py-2 will-change-scroll:">
      <Container className="flex flex-col gap-3">
        <Group position="apart" spacing={"sm"}>
          <Group noWrap position="start" spacing={"sm"} className="flex-1">
            <Logo />
            <NavLinks cls={"hidden xs:flex"} />
          </Group>
          {user ? <UserMenu /> : <LoginButton />}
          <ChangeTheme />
        </Group>
        <NavLinks cls={"xs:hidden"} />
      </Container>
    </Box>
  );
}
