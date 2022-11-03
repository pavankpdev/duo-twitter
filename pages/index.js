import {Grid, Box, Container, Flex, Heading} from "@chakra-ui/react";

// COMPONENTS
import Sidebar from "../components/Sidebar";
import Tweet from "../components/Tweet";
import NewTweet from "../components/Tweet/NewTweet";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <>
      <Container maxW={"container.xl"}>
        <Grid
            gridTemplateColumns={"25% 50% 25%"}
            w={"100%"}
            h={'100vh'}
        >
          <Box padding={"1rem"}>
            <Sidebar />
          </Box>
          <Box
              borderLeft={'1px solid'}
              borderRight={'1px solid'}
              borderColor={'gray.600'}
              h={'100%'}
              overflowY={'scroll'}
          >
            <Flex flexDirection={'column'} padding={'1rem'}>
                <Heading size={'md'}>Home</Heading>
                <NewTweet />
            </Flex>
            <Flex flexDirection={'column'} w={'100%'}>
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
            </Flex>
          </Box>
          <Box padding={"1rem"}>
            <SearchBar />
          </Box>
        </Grid>
      </Container>
    </>
  );
}
