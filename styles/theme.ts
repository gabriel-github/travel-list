import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    gray: {
      "50": "#F5F8FA",
      "500": "#47585B",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        overflowX: "hidden",
      },
    },
  },
});
