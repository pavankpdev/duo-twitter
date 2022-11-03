import { Grid, Box, Container } from "@chakra-ui/react";

// COMPONENTS
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Container maxW={"container.xl"}>
        <Grid gridTemplateColumns={"25% 50% 25%"} w={"100%"}>
          <Box padding={"1rem"}>
            <Sidebar />
          </Box>
          <Box padding={"1rem"}></Box>
          <Box padding={"1rem"}></Box>
        </Grid>
      </Container>
    </>
  );
}
