import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  image: string;
  type: string;
}

export function TraveType({ image, type }: TravelTypeProps) {
  return (
    <Flex direction="column" align="center" justify="center" flexWrap="wrap">
      <Image
        display={["none", "none", "none", "block"]}
        src={image}
        alt="vide noturna"
        w={["80px", "80px", "80px", "100px"]}
        h={["80px", "80px", "80px", "100px"]}
      />
      <Text
        mt="4"
        color="gray.500"
        fontWeight="bold"
        minW="150px"
        textAlign="center"
      >
        {type}
      </Text>
    </Flex>
  );
}
