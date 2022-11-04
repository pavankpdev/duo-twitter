import { Flex, Text } from "@chakra-ui/react";

const SidebarItem = ({ Icon, text, clickHandler }) => {

    const doNothing = () => {}

  return (
    <>
      <Flex
        alignItems={"center"}
        gap={"10px"}
        cursor={"pointer"}
        width={"fit-content"}
        padding={".5rem 1rem"}
        rounded={"full"}
        fontSize={"24px"}
        _hover={{
          backgroundColor: "gray.800",
        }}
        onClick={clickHandler || doNothing}
      >
        <Icon />
        <Text>{text}</Text>
      </Flex>
    </>
  );
};

export default SidebarItem;
