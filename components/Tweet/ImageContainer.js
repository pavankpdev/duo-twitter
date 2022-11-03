import {Box, Flex, Image} from "@chakra-ui/react";

const ImageContainer = ({images}) => {
    return <>
        <Flex flexWrap={'wrap'} width={'100%'}>
            {
                images?.slice(0, 4)?.map((image, index) => {
                    const divisor = images.length > 1 ? 2 : 1
                    return <Box width={`${100 / divisor}%`} h={'200px'} key={index}>
                        <Image
                            src={image}
                            w={'100%'}
                            h={'100%'}
                            objectFit={'cover'}
                        />
                    </Box>
                })
            }

        </Flex>
    </>
}

export default ImageContainer