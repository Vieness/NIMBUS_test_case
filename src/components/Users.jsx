import React from 'react';
import {List, ListItem, Table} from "@material-ui/core";

const Users = ({albums}) => {
    return (
        <Table>
            {albums.map(a => (
                <List key={a.id}>
                    <ListItem>id - {a.id}</ListItem>
                    <ListItem>title - {a.title}</ListItem>

                </List>
            ))}

        </Table>
    );
};

export default Users;