import { Flex, Wrap } from "@chakra-ui/react";
import { TraveType } from "./TravelType";

export function TravelTypes() {
  return (
    <Flex w="100%" mx="auto" py="8" mb="12" mt="8">
      <Wrap w="100%" align="center" justify="space-between" px="12">
        <TraveType image="/images/cocktail.svg" type="vida noturna" />
        <TraveType image="/images/surf.svg" type="praia" />
        <TraveType image="/images/building.svg" type="moderno" />
        <TraveType image="/images/museum.svg" type="clássico" />
        <TraveType image="/images/earth.svg" type="e mais..." />
      </Wrap>
    </Flex>
  );
}
