import { ActionIcon, Container, Footer, Group, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons";

export default function AppFooter() {
  return (
    <Footer className="py-5 border-t border-main-1 dark:border-main-1/10">
      <Container className="flex justify-between flex-wrap">
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={""} position="center" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Footer>
  );
}
