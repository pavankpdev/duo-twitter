import Item from "./Item";
import { RiHome7Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { Flex, Box, Button } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { FaUser } from 'react-icons/fa'
import {useRouter} from "next/router";

const Sidebar = () => {

  const router = useRouter();

  const redirectToProfile = () => {
    router.push('/pavan')
  }

  return (
    <>
      <Flex flexDirection={"column"} gap={".6rem"}>
        <Box fontSize={"30px"} padding={"1rem"}>
          <BsTwitter />
        </Box>
        <Item Icon={RiHome7Fill} text={"Home"} />
        <Item Icon={BiHash} text={"Explore"} />
        <Item Icon={AiOutlineBell} text={"Notifications"} />
        <Item Icon={FaUser} text={"Profile"} clickHandler={redirectToProfile} />
        <Button my={"1rem"} colorScheme={"twitter"} rounded="full">
          Tweet
        </Button>
      </Flex>
    </>
  );
};

export default Sidebar;
