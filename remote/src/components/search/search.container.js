import { useCallback, useState } from "react"
import React from "react";
import Input from "../input/Input";

const SearchContainer = () => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchValue = useCallback((e) => {
        console.log(e);
    }, []);

    return (
        <>
            <Input value={searchValue} onChange={handleSearchValue}></Input>
        </>
    );
}

export default SearchContainer;