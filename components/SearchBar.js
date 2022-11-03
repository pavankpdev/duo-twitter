import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from 'react-icons/bs'
import {useState} from "react";

const SearchBar = () => {
    const [search, setSearch] = useState('')

    const handleSearchChange = (e) => setSearch(e.target.value)

    return <>
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<BsSearch />}
            />
            <Input
                type={'search'}
                placeholder={'search twitter'}
                rounded={'full'}
                bg={'#212327'}
                color={'white'}
                borderColor={'#212327'}
                onChange={handleSearchChange}
                value={search}
            />
        </InputGroup>

    </>
}

export default SearchBar