import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      w="100vw"
      h={["163px", "250px", "250px", "335px"]}
      backgroundImage={`url('/images/backgroundStarts.jpg')`}
      backgroundSize="cover"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      backgroundRepeat="no-repeat"
    >
      <Flex
        width="100%"
        h="100%"
        mx="auto"
        justify={["center", "space-between"]}
        align="center"
        px={["4", "8", "12"]}
      >
        <Box textAlign="left">
          <Heading color="white">
            5 Continentes, infinitas <br /> possibilidades.
          </Heading>
          <Text color="white" fontSize="20">
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.{" "}
          </Text>
        </Box>

        <Image
          display={["none", "none", "none", "block"]}
          src="/images/Airplane.svg"
          alt="airplane"
          transform="translateY(48px)"
        />
      </Flex>
    </Box>
  );
}
