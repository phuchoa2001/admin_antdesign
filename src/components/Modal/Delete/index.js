import React from 'react';

import { Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { close } from '../../../redux/useModal';
import { deleteOrder } from "../../../redux/useOrder";
import { deleteUser } from '../../../redux/useUsers';
import { deleteProduct } from '../../../redux/useProducts';
import { addNotification } from '../../../redux/useNotification';

import openNotification from '../../../commons/notification';
function Delete(props) {
    const StateModal = useSelector(state => state.Modal)
    const visible = StateModal.Modal
    const { type, data } = StateModal;
    let Notification = `Bạn đã xóa ${data.length} phần tử ở phần`
    switch (type) {
        case "Delete users":
            Notification += "Users"
            break;
        case "Delete order":
            Notification += "Order"
            break;
        default:
            Notification += "Products"
    }
    const dispatch = useDispatch();
    const handleCancel = () => {
        dispatch(close());
    };
    const handleOk = () => {
        dispatch(close());
        dispatch(addNotification(Notification))
        openNotification(Notification);
        if (type === "Delete users") {
            dispatch(deleteUser(data));
        } else if (type === "Delete order") {
            dispatch(deleteOrder(data));
        } else {
            dispatch(deleteProduct(data));
        }
    };
    return (
        <>
            <Modal
                title={type}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Xóa"
                cancelText="Hủy bỏ"
            >
                <p>Bạn có muốn xóa {data.length} phần tử này không</p>
            </Modal>
        </>
    );
}

export default Delete;