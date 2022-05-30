import React, { useEffect, useRef } from 'react';

import { Form, Input, Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { close } from '../../../redux/useModal';
import { addOrder, resetOrder } from '../../../redux/useOrder';
import { addNotification } from '../../../redux/useNotification';

import Styles from './index.module.css';
import openNotification from '../../../commons/notification';

function AddOrder(props) {
    const StateModal = useSelector(state => state.Modal)
    const visible = StateModal.Modal
    const { type } = StateModal;
    const isBool = type !== "Add order";
    const dispatch = useDispatch();
    const name = useRef();
    const formElemt = useRef();
    const order = useSelector(state => state.Order.order);
    const handleCancel = () => {
        dispatch(close());
        dispatch(resetOrder());
    };
    const handleOk = () => {
        formElemt.current.submit();
    };
    const [form] = Form.useForm();
    const objectForm = {
        key: Form.useWatch('key', form) || order.key,
        name: Form.useWatch('name', form) || "",
        price: Form.useWatch('price', form) || "",
        address: Form.useWatch('address', form) || ""
    }
    const handleSubmit = () => {
        //  bắt có lỗi không nếu không chúng ta thêm 
        const Notification =
            `${objectForm.name} đã ${!isBool ? "thêm" : "sửa"} vào phần order`;
        dispatch(addOrder(objectForm));
        dispatch(resetOrder());
        dispatch(close());
        dispatch(addNotification(Notification))
        openNotification(Notification);
    }
    useEffect(() => {
        name.current.focus();
        formElemt.current.setFieldsValue(order);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Modal
                title={type}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText= {!isBool ?"Thêm" : "Sửa"}
                cancelText="Hủy bỏ"
            >
                <h3 className={Styles.title}>
                    {!isBool ? "Thêm sản phẩm" : "Sửa sản phẩm"}
                </h3>
                <Form
                    className={Styles.form}
                    onFinish={handleSubmit}
                    form={form}
                    ref={formElemt}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        name="name"
                        label="Tên sản phẩm"
                        tooltip="Hãy nhập tên tại đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này !',
                                whitespace: true,
                                warningOnly:isBool
                            },
                        ]}
                    >
                        <Input placeholder="Hãy nhập tên tại đây !" ref={name} />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="giá sản phẩm"
                        tooltip="Hãy nhập giá tại đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này !',
                                whitespace: true,
                                warningOnly:isBool
                            },
                        ]}
                    >
                        <Input placeholder="Hãy nhập giá tại đây" />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Địa chỉ sản phẩm"
                        tooltip="Hãy nhập địa chỉ tại đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này !',
                                whitespace: true,
                                warningOnly:isBool
                            },
                        ]}
                    >
                        <Input placeholder="Hãy nhập địa chỉ tại đây" />
                    </Form.Item>
                    <button type="submit" className={Styles.btnSubmit}></button>
                </Form>
            </Modal>
        </>
    );
}

export default AddOrder;