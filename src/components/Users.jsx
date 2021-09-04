import React from 'react';

const Users = ({albums}) => {
    return (
        <div    >
            {albums.map(a=>(
                <div key={a.id}>
                    id - {a.id}
                    <br/>
                    title - {a.title}
                </div>
            ))}
            
        </div>
    );
};

export default Users;