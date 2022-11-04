import {Avatar, Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
import {BiBriefcaseAlt, BiLinkAlt, BiCake} from "react-icons/bi";
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsCalendar3} from 'react-icons/bs'

// Components
import Categories from "./Categories";

const Profile = () => {
    return <>
        <Box
            h={'100%'}
        >
            <Box
                w={'100%'}
                h={'200px'}
            >
                <Image
                    src={'https://pbs.twimg.com/profile_banners/935746843375538177/1645027031/600x200'}
                    w={'100%'}
                    h={'100%'}
                    objectFit={'cover'}
                />
            </Box>

            <Flex
                flexDirection={'column'}
                gap={'1rem'}
                padding={'1rem'}
                mt={'-12%'}
            >
                <Avatar
                    name={'Pavan'}
                    w={'150px'}
                    h={'150px'}
                    border={'5px solid black'}
                />

                <Flex
                    flexDirection={'column'}
                >
                    <Heading as={'h3'} size={'md'}>
                        Pavan
                    </Heading>
                    <Text>
                        @pavan
                    </Text>
                </Flex>

                <Text>
                    Tech lead | MERN | Blockchain | DevOps | Building @write0_in and @Duolearnhq
                    | I Write blogs on new tech and stuff | demon Slayer corps.  🚀
                </Text>

                <Flex
                    flexWrap={'wrap'}
                    gap={'5px'}
                >
                    <Categories Icon={BiBriefcaseAlt} text={'Entrepreneur'} />
                    <Categories Icon={HiOutlineLocationMarker} text={'Bengaluru, India'} />
                    <Categories Icon={BiLinkAlt} text={'peerlist.io/pavan38'} />
                    <Categories Icon={BiCake} text={'Born July 7, 2000'} />
                    <Categories Icon={BsCalendar3} text={'Joined November 2017'} />
                </Flex>

                <Flex gap={'15px'} alignItems={'center'}>
                    <Flex alignItems={'center'} gap={'5px'}>
                        <Heading as={'h6'} size={'xs'}>
                            100
                        </Heading>
                        <Text color={'gray.600'}>
                            Following
                        </Text>
                    </Flex>

                    <Flex alignItems={'center'} gap={'5px'}>
                        <Heading as={'h6'} size={'xs'}>
                            100
                        </Heading>
                        <Text color={'gray.600'}>
                            Followers
                        </Text>
                    </Flex>
                </Flex>

            </Flex>
        </Box>
    </>
}

export default Profile