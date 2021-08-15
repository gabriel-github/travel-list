import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../public/images/Logo.svg";

export function Header() {
  return (
    <Flex
      align="center"
      justify="center"
      w="100%"
      h="20"
      maxWidth={1480}
      px="2"
      mx="auto"
    >
      <Image src={Logo} alt="Logo" />
    </Flex>
  );
}
