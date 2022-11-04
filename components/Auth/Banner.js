import {Box, Button, Container, Flex, Heading, Text, useDisclosure} from "@chakra-ui/react";

// COMPONENTS
import LoginModel from "./LoginModel";
import RegisterModel from "./RegisterModel";

const Banner = () => {
    const {
        isOpen: isLoginModelOpen,
        onOpen: onLoginModelOpen,
        onClose: onLoginModelClose,
    } = useDisclosure()

    const {
        isOpen: isRegisterModelOpen,
        onOpen: onRegisterModelOpen,
        onClose: onRegisterModelClose,
    } = useDisclosure()

    const alreadyRegisteredUser = () => {
        onRegisterModelClose()
        onLoginModelOpen()
    }

    const newRegisteredUser = () => {
        onLoginModelClose()
        onRegisterModelOpen()
    }

    return <>
        <LoginModel
            isOpen={isLoginModelOpen}
            onClose={onLoginModelClose}
            newRegisteredUser={newRegisteredUser}
        />
        <RegisterModel
            isOpen={isRegisterModelOpen}
            onClose={onRegisterModelClose}
            alreadyRegisteredUser={alreadyRegisteredUser}
        />
        <Box
            position={'absolute'}
            bottom={'0'}
            zIndex={999}
            bg={'twitter.500'}
            w={'100%'}
            py={'1rem'}
        >
            <Container maxW={'container.xl'}>
                <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Flex
                        flexDirection={'column'}
                    >
                        <Heading size={'lg'}>
                            Don’t miss what’s happening
                        </Heading>
                        <Text>
                            People on Twitter are the first to know.
                        </Text>
                    </Flex>

                    <Flex gap={'10px'}>
                        <Button
                            rounded={'full'}
                            colorScheme={'white'}
                            variant={'outline'}
                            onClick={onLoginModelOpen}
                        >
                            Log in
                        </Button>
                        <Button
                            rounded={'full'}
                            color={'black'}
                            onClick={onRegisterModelOpen}
                        >
                            Sign up
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    </>
}

export default Banner