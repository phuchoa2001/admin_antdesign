import React from 'react';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useDispatch } from 'react-redux';

import { editProduct } from '../../../redux/useProducts';
import { open } from '../../../redux/useModal';
import Styles from './index.module.css';

const { Meta } = Card;
function Item({ keys, img, name, price }) {
    const dispatch = useDispatch();
    const handleEdit = () => {
        dispatch(editProduct(keys));
        dispatch(open({
            type: "Edit products"
        }));
    }
    const handleDelete = () => {
        dispatch(open({
            type: "Delete products",
            data: [keys]
        }));
    }
    return (
        <Card
            style={{
                width: "100%",
                marginTop: "16px"
            }}
            cover={
                <img
                    alt="example"
                    src={img}
                    className={Styles.image}
                    style={{
                        height: "300px"
                    }}
                />
            }
            actions={[
                <EditOutlined key="edit" onClick={handleEdit} />,
                <DeleteOutlined key="delete" onClick={handleDelete} />
            ]}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={name}
                description={price}
            />
        </Card>
    );
}

export default Item;