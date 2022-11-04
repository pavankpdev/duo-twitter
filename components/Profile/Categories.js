import {Flex} from "@chakra-ui/react";

const Categories = ({Icon, text}) => {
    return <>
        <Flex
            fontSize={'16px'}
            color={'gray.500'}
            alignItems={'center'}
            gap={'5px'}
            cursor={'pointer'}
            transition={'all .3s linear'}
            _hover={{
                color: 'gray.200'
            }}
        >
            <Icon />
            {text}
        </Flex>
    </>
}

export default Categories
