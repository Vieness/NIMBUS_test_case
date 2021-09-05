import React from 'react';
import {Button, ButtonGroup} from "@material-ui/core";

const Pagination = ({albumsPerPage, totalAlb, paginate}) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalAlb / albumsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <ButtonGroup color="primary" aria-label="outlined primary button group">
            {pageNumber.map(num => (
                <div key={num}><Button onClick={() => paginate(num)}>{num}</Button></div>
            ))}
        </ButtonGroup>
    );
};

export default Pagination;