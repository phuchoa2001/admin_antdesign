import React, { useState } from 'react';

import { Button, Table , Empty } from 'antd';

import Styles from './index.module.css';
function TableData({ columns, data, onAdd, onEdit, onDelete }) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    // Thực hiện một ví dụ tìm kiếm cột tùy chỉnh thông qua 
    const start = () => {
        setLoading(true); // ajax request after empty completing

        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    //  hành động 
    const handleAdd = () => {
        onAdd();
    }
    const handleEdit = () => {
        onEdit(selectedRowKeys);
        setSelectedRowKeys([])
    }
    const handleDelete = () => {
        onDelete(selectedRowKeys);
        setSelectedRowKeys([])
    }

    // 
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    //  điều kiện giúp hiện thị nút bấm 

    const hasSelected = selectedRowKeys.length > 0;
    const editSelectd = selectedRowKeys.length === 1;
    return (
        <div className={Styles.Order}>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                    className={Styles.btnOrder}
                >
                    Làm lại
                </Button>
                <Button
                    type="primary"
                    onClick={handleAdd}
                    loading={loading}
                    className={Styles.btnOrder}
                >
                    Thêm
                </Button>
                <Button
                    type="primary"
                    onClick={handleEdit}
                    disabled={!editSelectd}
                    loading={loading}
                    className={Styles.btnOrder}
                >
                    Sữa
                </Button>
                <Button
                    type="primary"
                    onClick={handleDelete}
                    disabled={!hasSelected}
                    loading={loading}
                    className={Styles.btnOrder}
                >
                    Xóa
                </Button>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Đã chọn ${selectedRowKeys.length} Order` : ''}
                </span>
            </div>{
                data.length  > 0 ? 
                <Table 
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={data} 
                className={Styles.table}
                 /> :
                <Empty description="Không có dữ liệu" />
            }
        </div>
    );
}

export default TableData;