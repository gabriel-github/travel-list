import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

interface SliderProps {
  slides: {
    id: number;
    name: string;
    image: string;
    slug: string;
  }[];
}

export function Slider({ slides }: SliderProps) {
  return (
    <Flex direction="column" align="center" w="100%">
      <Box h="1" w="20" bg="gray.700" />

      <Heading color="gray.500" textAlign="center" mt="12" mb="20">
        Vamos nessa ? <br /> Então escolha seu continente
      </Heading>

      <Flex
        w="100%"
        maxW="1240px"
        max="auto"
        mb={["5", "10"]}
        h={["250px", "450px"]}
        px="4"
      >
        <Swiper
          navigation
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          autoplay={{
            delay: 4000,
          }}
          slidesPerView={1}
          style={{
            width: "100%",
            flex: "1",
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                bgImage={`url(${slide.image})`}
              >
                <Link href={`/continents/${slide.slug}`} passHref>
                  <a>
                    <Heading color="white" textAlign="center">
                      {slide.name}
                    </Heading>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
}
