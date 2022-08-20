import { Box, Container, Group } from "@mantine/core";
import ChangeTheme from "./Helper/ChangeTheme";
import Logo from "./Helper/Logo";
import NavLinks from "./Helper/NavLinks";
import UserMenu from "./Helper/UserMenu";
import LoginButton from "./Helper/LoginButton"

export default function HeaderTabs() {
  const user = false;
  return (
    <Box className=" shadow shadow-neu-3 dark:shadow-neu-8 py-2">
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
