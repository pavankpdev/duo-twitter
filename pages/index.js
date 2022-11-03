import {Grid, Box, Container, Flex, Heading} from "@chakra-ui/react";

// COMPONENTS
import Sidebar from "../components/Sidebar";
import Tweet from "../components/Tweet";
import NewTweet from "../components/Tweet/NewTweet";

export default function Home() {
  return (
    <>
      <Container maxW={"container.xl"}>
        <Grid gridTemplateColumns={"25% 50% 25%"} w={"100%"}>
          <Box padding={"1rem"}>
            <Sidebar />
          </Box>
          <Box
              borderLeft={'1px solid'}
              borderRight={'1px solid'}
              borderColor={'gray.600'}
          >
            <Flex flexDirection={'column'}>
                <Heading size={'md'}>Home</Heading>
                <NewTweet />
            </Flex>
              <Tweet
                  fullname={"Mehmet"}
                  username={"mehmet"}
                  avatar={"https://pbs.twimg.com/profile_images/1351781709704548352/8Q9ZQ9Zj_400x400.jpg"}
                  tweetBody={'Join us for a live watch party of the #dotNETConf Keynote covering full stack development, APIs, multi-platform development, game development, and machine learning!'}
                  timestamp={'2022-11-03T14:20:56.633Z'}
              />
              <Tweet
                  fullname={"Mehmet"}
                  username={"mehmet"}
                  avatar={"https://pbs.twimg.com/profile_images/1351781709704548352/8Q9ZQ9Zj_400x400.jpg"}
                  tweetBody={'Join us for a live watch party of the #dotNETConf Keynote covering full stack development, APIs, multi-platform development, game development, and machine learning!'}
                  timestamp={'2022-11-03T14:20:56.633Z'}
              />
          </Box>
          <Box padding={"1rem"}></Box>
        </Grid>
      </Container>
    </>
  );
}
