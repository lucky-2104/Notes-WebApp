import React from "react";

import { MdSearch } from "react-icons/md";
const Search = ({handleSeachNote}) => {
    return (
        <div className="Search">
            <MdSearch className="search-icons" size='1.3em' />
            <input onChange={(event) =>
                handleSeachNote(event.target.value)}
                type='text' placeholder="Type to search....." />
        </div>
    )
};

export default Search;