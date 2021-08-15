import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface ContinentDescriptionProps {
  description: string;
}

export function ContinentDescription({
  description,
}: ContinentDescriptionProps) {
  return (
    <Flex
      w="100%"
      mx="auto"
      justify="space-between"
      p="12"
      align="center"
      flexWrap="wrap"
    >
      <Text
        alignItems="center"
        textAlign="left"
        display="flex"
        h="100%"
        w={["100%", "100%", "100%", "100%", "45%"]}
      >
        {description}
      </Text>

      <Grid
        w={["100%", "100%", "100%", "100%", "50%"]}
        h="100%"
        align="center"
        templateColumns="repeat(3, 1fr)"
        justify="center"
        ml="4"
        mt={["8", "8", "8"]}
        maxW={500}
      >
        <Flex direction="column" align="center" px="8" justify="center">
          <Heading color="yellow.300">50</Heading>
          <Text color="gray.500" fontWeight="bold">
            países
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Heading color="yellow.300">60</Heading>
          <Text color="gray.500" fontWeight="bold">
            Linguas
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Heading color="yellow.300">50</Heading>
          <Flex align="center" justify="center">
            <Text color="gray.500" fontWeight="bold">
              cidades +100{" "}
            </Text>
            <Box ml="2" color="gray.400">
              <FiInfo color="gray.200" />
            </Box>
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  );
}
