import {Avatar, Box, Flex, Grid, Heading, Text} from "@chakra-ui/react";
import {FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa'
import {AiOutlineUpload} from 'react-icons/ai'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// COMPONENTS
import Interaction from "./Interaction";
import ImageContainer from "./ImageContainer";

const Tweet = ({fullname, username, avatar, tweetBody, timestamp, images}) => {
    dayjs.extend(relativeTime)

    return <>
        <Grid gridTemplateColumns={'10% 90%'}>
            <Box>
                <Avatar name={fullname} src={avatar} />
            </Box>
            <Flex flexDirection={'column'} gap={'5px'}>
                <Flex gap={'10px'} alignItems={'center'}>
                    <Heading as={'h3'} size={'sm'}>{fullname}</Heading>
                    <Text fontSize={'sm'} fontWeight={'light'}>@{username}</Text>
                    <Text
                        fontSize={'sm'}
                        fontWeight={'light'}
                        color={'gray.500'}
                    >
                        {dayjs().from(dayjs(timestamp))}
                    </Text>
                </Flex>
                <Flex flexDirection={'column'} gap={'10px'}>
                    <Text>
                        {tweetBody}
                    </Text>
                    <ImageContainer images={images || []} />
                </Flex>
                <Flex my={'5px'} justifyContent={'space-between'}>
                    <Interaction Icon={FaRegComment} numbers={0} />
                    <Interaction Icon={FaRetweet} numbers={0} />
                    <Interaction Icon={FaRegHeart} numbers={0} />
                    <Interaction Icon={AiOutlineUpload} numbers={0} />
                </Flex>
            </Flex>
        </Grid>
    </>
}

export default Tweet