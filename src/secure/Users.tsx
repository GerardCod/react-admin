import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import client from '../public/services/ApiService';
import { AxiosResponse } from 'axios';
import User from '../public/models/User';

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        client.get('/users')
        .then((res: AxiosResponse<User[]>) => {
            setUsers(res.data);
        })
        .catch((error: Error) => {
            console.error(error);
        });
    }, [users])

    return (
        <Wrapper>
            <h2>Usuarios</h2>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo electrónico</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user: User) => (
                            <tr key={`user-id: ${user.id}`}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Wrapper>
    );
}
    


export default Users;