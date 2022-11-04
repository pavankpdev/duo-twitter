import { ChakraProvider } from "@chakra-ui/react";

// THEMES
import { theme } from "../theme";

// COMPONENTS
import Banner from "../components/Auth/Banner";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Banner />
    </ChakraProvider>
  );
}

export default MyApp;
