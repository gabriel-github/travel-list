import { Box, Flex, Heading, Wrap } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../public/images/Logo.svg";
import { Card } from "../../components/Card";
import { ContinentDescription } from "../../components/ContinentDescription";
import { api } from "../../services/api";

interface ContinentData {
  continentData: {
    id: number;
    slug: string;
    title: string;
    url: string;
    description: string;
    countries: {
      name: string;
      city: {
        city_name: string;
        city_image: string;
      };
      flag: string;
    }[];
  };
}

interface DbDataReturn {
  id: number;
  slug: string;
  title: string;
  url: string;
  description: string;
  countries: {
    name: string;
    city: {
      city_name: string;
      city_image: string;
    };
    flag: string;
  }[];
}

export default function Continent({ continentData }: ContinentData) {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        w="100%"
        h="20"
        maxWidth={1480}
        px="2"
        mx="auto"
      >
        <Link href="/">
          <Box mr="auto" fontSize="20" pl="8" cursor="pointer">
            <IoIosArrowBack color="gray.400" />
          </Box>
        </Link>
        <Box mr="auto">
          <Image src={Logo} alt="Logo" />
        </Box>
      </Flex>

      <Flex
        w="100%"
        h={["163px", "250px", "250px", "335px"]}
        backgroundImage={`url(${continentData.url})`}
        backgroundSize="cover"
        bgPosition="center"
        backgroundRepeat="no-repeat"
        align="flex-end"
      >
        <Heading mb="30" pl="12" color="white">
          {continentData.title}
        </Heading>
      </Flex>

      <ContinentDescription description={continentData.description} />

      <Flex direction="column" w="100%" px="12" mb="4" mt="12">
        <Heading color="gray.500" mb="4">
          Cidades +100
        </Heading>
        <Wrap spacing="30px">
          {continentData.countries.map((props) => (
            <Card
              country={props.name}
              city={props.city}
              key={props.city.city_name}
              flag={props.flag}
            />
          ))}
        </Wrap>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<DbDataReturn[]>("/continents");
  const { data } = response;

  const countries = data.map((data) => data.slug);

  const paths = countries.map((country: string) => ({
    params: { country },
  }));

  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;

  const response = await api.get(`/continents?slug=${params?.country}`);

  return {
    props: {
      continentData: response.data[0],
    },
    revalidate: 60 * 60 * 24,
  };
};
