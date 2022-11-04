import {Button} from "@chakra-ui/react";
import {FcGoogle} from 'react-icons/fc'

const GoogleSignin = ({isLogin}) => {
    return <>
        <Button
            rounded={'full'}
            bg={'white'}
            color={'black'}
            leftIcon={<FcGoogle />}
        >
            {
                isLogin ? 'Sign in with Google' : 'Sign up with Google'
            }
        </Button>
    </>
}
export default GoogleSignin