import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, Flex, Container, Divider, Text, Input, Button,
} from '@chakra-ui/react'
import Link from "next/link";

// COMPONENTS
import GoogleSignin from "./GoogleSignin";
import AppleSignin from "./AppleSignin";

const RegisterModel = ({isOpen, onClose, alreadyRegisteredUser}) => {

    return <>
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay
                backdropFilter='blur(10px)'
            />
            <ModalContent bg={'black'} border={'1px solid'} borderColor={'gray.700'}>
                <ModalHeader>Register to Duo Twitter</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container px={'5rem'} my={'4rem'}>
                        <Flex
                            flexDirection={'column'}
                            gap={'10px'}
                            w={'100%'}
                        >
                            <GoogleSignin  />
                            <AppleSignin  />
                            <Flex alignItems={'center'} gap={'10px'}>
                                <Divider/>
                                <Text>Or</Text>
                                <Divider/>
                            </Flex>

                            <Flex flexDirection={'column'} gap={'1rem'}>
                                <Input
                                    type={'text'}
                                    placeholder={'Full Name'}
                                    size={'lg'}
                                    borderColor={'gray.700'}
                                />
                                <Input
                                    type={'text'}
                                    placeholder={'Username'}
                                    size={'lg'}
                                    borderColor={'gray.700'}
                                />
                                <Input
                                    type={'email'}
                                    placeholder={'email'}
                                    size={'lg'}
                                    borderColor={'gray.700'}
                                />
                                <Input
                                    type={'password'}
                                    placeholder={'*********'}
                                    size={'lg'}
                                    borderColor={'gray.700'}
                                />

                                <Button
                                    rounded={'full'}
                                    bg={'white'}
                                    color={'black'}
                                >
                                    Register
                                </Button>
                            </Flex>
                            <Flex gap={'5px'} justifyContent={'center'}>
                                <Text>
                                    Already registered?
                                </Text>
                                <Text
                                    color={'twitter.400'}
                                    cursor={'pointer'}
                                    fontWeight={'semibold'}
                                    onClick={alreadyRegisteredUser}
                                >Login</Text>
                            </Flex>

                        </Flex>
                    </Container>

                </ModalBody>
            </ModalContent>
        </Modal>
    </>

}

export default RegisterModel