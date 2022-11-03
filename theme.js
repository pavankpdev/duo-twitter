import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#000",
        color: "#fff",
      },
    },
  },
  colors: {
    twitter: {
      50: "#dcf6ff",
      100: "#b1e0ff",
      200: "#83cafa",
      300: "#55b5f5",
      400: "#28a0f1",
      500: "#0e86d7",
      600: "#0168a8",
      700: "#004b7a",
      800: "#002d4c",
      900: "#00101f",
    },
  },
});
