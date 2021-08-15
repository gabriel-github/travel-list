import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";
import { api } from "../services/api";

interface SlideData {
  id: number;
  title: string;
  url: string;
  slug: string;
}

interface HomeProps {
  slideData: {
    id: number;
    name: string;
    image: string;
    slug: string;
  }[];
}

export default function Home({ slideData }: HomeProps) {
  console.log(slideData);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Flex width="100vw" direction="column">
        <Header />
        <Banner />
        <TravelTypes />
      </Flex>
      <Slider slides={slideData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<SlideData[]>("/continents");
  const { data } = response;

  const slideData = data.map((data) => ({
    id: data.id,
    name: data.title,
    image: data.url,
    slug: data.slug,
  }));

  return {
    props: {
      slideData,
    },
    revalidate: 60 * 60 * 24,
  };
};
