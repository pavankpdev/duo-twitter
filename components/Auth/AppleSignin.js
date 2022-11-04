import {Button} from "@chakra-ui/react";
import {AiFillApple} from 'react-icons/ai'

const AppleSignin = ({isLogin}) => {
    return <>
        <Button
            rounded={'full'}
            bg={'white'}
            color={'black'}
            leftIcon={<AiFillApple />}
        >
            {
                isLogin ? 'Sign in with Apple' : 'Sign up with Apple'
            }
        </Button>
    </>
}
export default AppleSignin