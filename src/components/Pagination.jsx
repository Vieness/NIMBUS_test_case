import React from 'react';
import {Button} from "@material-ui/core";

const Pagination = ({albumsPerPage, totalAlb, paginate}) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalAlb / albumsPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div>
            {pageNumber.map(num => (
                <div  key={num}><Button onClick={() => paginate(num)} href="!#">{num}</Button></div>
            ))}
        </div>
    );
};

export default Pagination;