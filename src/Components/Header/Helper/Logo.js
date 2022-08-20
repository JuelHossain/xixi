import { Group, Text } from "@mantine/core";
import { IconShadow } from "@tabler/icons";

export default function Logo({}) {
  return (
    <Group spacing={5} component={"a"} href="/">
      <IconShadow className="text-main-5" />
      <Text className="tracking-widest text-xl p-0 font-bold text-main-5 uppercase">
        XiXi
      </Text>
    </Group>
  );
}
