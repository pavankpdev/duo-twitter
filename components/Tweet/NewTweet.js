import {Avatar, Box, Flex, Grid, Divider, Textarea, Text, IconButton, Button} from "@chakra-ui/react";
import {FaRegImage} from 'react-icons/fa'
import {useState} from "react";

const NewTweet = () => {
    const [tweetBody, setTweetBody] = useState('')

    const handleTweetChange = (e) => setTweetBody(e.target.value)

    const submitTweet = () => {
        console.log(tweetBody)
        alert('Tweeted')
    }

    return <>
        <Grid
            gridTemplateColumns={'10% 90%'}
            padding={'1rem'}
            borderBottom={'1px solid'}
            borderColor={'gray.600'}
        >
            <Box>
                <Avatar name={"fullname"} src={''} />
            </Box>
            <Flex flexDirection={'column'} gap={'10px'}>
                <Flex>
                    <Textarea
                        placeholder={`What's happening?`}
                        border={'none'}
                        rows={4}
                        onChange={handleTweetChange}
                        value={tweetBody}
                    >
                    </Textarea>
                </Flex>
                <Divider />
                <Flex justify={'space-between'} alignItems={'center'}>
                    <IconButton
                        aria-label={'Upload Image'}
                        icon={<FaRegImage />}
                        colorScheme={'twitter'}
                        variant={'ghost'}
                        rounded={'full'}
                    />
                    <Button
                        colorScheme={'twitter'}
                        rounded={'full'}
                        onClick={submitTweet}
                    >
                        Tweet
                    </Button>
                </Flex>
            </Flex>
        </Grid>
    </>
}

export default NewTweet