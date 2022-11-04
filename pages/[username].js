import {useRouter} from "next/router";
import {Box, Container, Flex, Grid, Heading, Text} from "@chakra-ui/react";
import {FaArrowLeft} from 'react-icons/fa'

// COMPONENTS
import Sidebar from "../components/Sidebar";
import ProfileComp from "../components/Profile";
import Tweet from "../components/Tweet";
import SearchBar from "../components/SearchBar";

const Profile = () => {
    const router = useRouter();

    console.log(router.query.username);
    return <>
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
                    <Flex flexDirection={'column'} >
                        <Flex
                            gap={'10px'}
                            alignItems={'center'}
                            padding={'1rem'}
                        >
                            <FaArrowLeft />
                            <Flex
                                flexDirection={'column'}
                            >
                                <Heading size={'md'}>Pavan Kumar</Heading>
                                <Text>538 Tweets</Text>
                            </Flex>
                        </Flex>
                        <ProfileComp />
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
}

export default Profile