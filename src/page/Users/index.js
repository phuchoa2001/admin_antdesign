import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { open } from '../../redux/useModal';
import { editUser } from '../../redux/useUsers';

import TableData from '../../components/TableData';
import { useSearch } from '../../hooks/useSearch';
function Users(props) {
    const { getColumnSearchProps } = useSearch();
    const ListUsers = useSelector(state => state.Users.list);
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Tài khoản',
            dataIndex: 'username',
            ...getColumnSearchProps('username'),
            sorter: (a, b) => a.username.length - b.username.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Mất khẩu',
            dataIndex: 'password',
            ...getColumnSearchProps('password'),
            sorter: (a, b) => a.password.length - b.password.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];
    const handleAdd = () => {
        dispatch(open({
            type: "Add users"
        }));
    }
    const handleEdit = (selectedRowKeys) => {
        dispatch(open({
            type: "Edit users"
        }));
        dispatch(editUser(selectedRowKeys[0]));
    }
    const handleDelete = (selectedRowKeys) => {
        dispatch(open({
            type: "Delete users",
            data: selectedRowKeys
        }));
    }
    return (
        <div className='wrapperMaindash'>
            <h1 className="heading-text--large">Danh Sách User</h1>
            < TableData columns={columns} data={ListUsers}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete} />

        </div>
    );
}

export default Users;