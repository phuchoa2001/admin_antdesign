import React, { useEffect, useRef } from 'react';

import { Form, Input, Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { close } from '../../../redux/useModal';
import { addUser, resetUser } from '../../../redux/useUsers';
import { addNotification } from '../../../redux/useNotification';

import Styles from './index.module.css';
import CheckAccount from '../../../commons/checkAccount';
import openNotification from '../../../commons/notification';

function AddOrder(props) {
    const StateModal = useSelector(state => state.Modal)
    const visible = StateModal.Modal
    const { type } = StateModal;
    const isBool = type !== "Add users";
    const dispatch = useDispatch();
    const name = useRef();
    const formElemt = useRef();
    const { user, list } = useSelector(state => state.Users);
    const handleCancel = () => {
        dispatch(close());
        dispatch(resetUser());
    };
    const handleOk = () => {
        formElemt.current.submit();
    };
    const [form] = Form.useForm();
    const objectForm = {
        key: Form.useWatch('key', form) || user.key,
        email: Form.useWatch('email', form) || "",
        username: Form.useWatch('username', form) || "",
        password: Form.useWatch('password', form) || ""
    }
    const handleSubmit = async () => {
        //  bắt có lỗi không nếu không chúng ta thêm 
        const Notification = `${objectForm.username} đã ${!isBool ? "thêm" : "sửa"} vào phần Users`;
        dispatch(addUser(objectForm));
        dispatch(resetUser());
        dispatch(close());
        dispatch(addNotification(Notification))
        openNotification(Notification);
    }
    useEffect(() => {
        name.current.focus();
        formElemt.current.setFieldsValue(user);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Modal
                title={type}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={!isBool ? "Thêm" : "Sửa"}
                cancelText="Hủy bỏ"
            >
                <h3 className={Styles.title}>
                    {!isBool ? "Thêm tài khoản" : "Sửa tài khoản"}
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
                        name={'email'}
                        label="Email"
                        tooltip="Hãy nhập username đây !"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Đây không phải là email',
                                whitespace: true,
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    return CheckAccount(objectForm.key, value, "email", list)
                                }
                            })
                        ]}
                    >
                        <Input placeholder="Hãy nhập username tại đây" ref={name} />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        label="Tài khoản"
                        tooltip="Hãy nhập tài khoản đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này',
                                whitespace: true,
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    return CheckAccount(objectForm.key, value, "username", list)
                                }
                            })
                        ]}
                    >
                        <Input placeholder="Hãy nhập tài khoản đây " />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mất khẩu "
                        tooltip="Hãy nhập mất khẩu tại đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này',
                                whitespace: true,
                                warningOnly: isBool
                            },
                        ]}
                    >
                        <Input placeholder="Hãy nhập mất khẩu tại đây " />
                    </Form.Item>
                    <button type="submit" className={Styles.btnSubmit}></button>
                </Form>
            </Modal>
        </>
    );
}

export default AddOrder;