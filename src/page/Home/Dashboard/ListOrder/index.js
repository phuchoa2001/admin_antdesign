import React, { useState } from 'react';

import { Table, Pagination, Empty } from 'antd';
import { useSelector } from 'react-redux';

import Styles from './index.module.css';
import { useSearch } from '../../../../hooks/useSearch';
//  Data

const onChange = (pagination, filters, sorter, extra) => {

};
const pageSize = 4;
const MyPagination = ({ total, onChange, current, className }) => {
    return (
        <Pagination
            onChange={onChange}
            total={total}
            current={current}
            pageSize={pageSize}
            className={className}
        />
    );
};
function ListOrder(props) {
    const [current, setCurrent] = useState(1);
    const { getColumnSearchProps } = useSearch();
    const Listorder = useSelector(state => state.Order.list);
    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        return Listorder.slice((current - 1) * pageSize, current * pageSize);
    };
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',

            filterMode: 'tree',
            filterSearch: true,
            sorter: (a, b) => a.price - b.price,
            onFilter: (value, record) => record.address.startsWith(value),
            width: '30%',
            ...getColumnSearchProps('price')
        },
        {
            title: 'giá',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            filters: [
                {
                    text: <span>Hà Nội</span>,
                    value: 'Hà Nội',
                },
                {
                    text: <span>Hồ Chi Minh</span>,
                    value: 'Hồ Chi Minh',
                },
                {
                    text: <span>Phú Yên</span>,
                    value: 'Phú Yên',
                },
            ],
            onFilter: (value, record) => record.address.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
    ];
    return (
        <> {Listorder.length > 0 ?
            <>
                <Table
                    columns={columns} 
                    dataSource={getData(current, pageSize)} 
                    onChange={onChange}
                    pagination={false}
                />
                <MyPagination
                    total={Listorder.length}
                    current={current}
                    onChange={setCurrent}
                    className={Styles.Pagination}
                />
            </>
            : <Empty description="Không có dữ liệu" />
        }
        </>
    );
}

export default ListOrder;