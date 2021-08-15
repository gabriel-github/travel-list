import { Box, Flex, Image, Text, WrapItem } from "@chakra-ui/react";

interface CardProps {
  country: string;
  city: {
    city_image: string;
    city_name: string;
  };
  flag: string;
}

export function Card({ city, flag, country }: CardProps) {
  return (
    <WrapItem w="200" h="300">
      <Box
        h="100%"
        w="100%"
        border="1px"
        borderColor="yellow.200"
        borderRadius={8}
      >
        <Box>
          <Image
            src={city.city_image}
            w="100%"
            h="200"
            alt="city"
            borderTopRadius={8}
          />
        </Box>
        <Flex w="100%" mt="4" justify="space-between" px={4}>
          <Flex direction="column">
            <Text>{city.city_name}</Text>
            <Text>{country}</Text>
          </Flex>

          <Box
            w="60px"
            h="60px"
            backgroundImage={`url(${flag})`}
            bgPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius="full"
            backgroundSize="cover"
          />
        </Flex>
      </Box>
    </WrapItem>
  );
}
