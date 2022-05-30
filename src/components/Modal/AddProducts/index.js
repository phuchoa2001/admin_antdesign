import React, { useEffect, useRef } from 'react';

import { Form, Input, Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { close } from '../../../redux/useModal';
import { addProduct, resetProduct } from '../../../redux/useProducts';
import { addNotification } from '../../../redux/useNotification';

import Styles from './index.module.css';
import Upload from '../../Upload';
import openNotification from '../../../commons/notification';

function AddOrder(props) {
    const StateModal = useSelector(state => state.Modal)
    const visible = StateModal.Modal
    const { type } = StateModal;
    const dispatch = useDispatch();
    const name = useRef();
    const formElemt = useRef();
    const { product } = useSelector(state => state.Products);
    const handleCancel = () => {
        dispatch(close());
        dispatch(resetProduct());
    };
    const handleOk = () => {
        handleSubmit();
    };
    const [form] = Form.useForm();
    const objectForm = {
        key: Form.useWatch('key', form) || product.key,
        img: Form.useWatch('img', form) || "",
        name: Form.useWatch('name', form) || "",
        price: Form.useWatch('price', form) || ""
    }
    const handleUpload = (url) => {
        formElemt.current.setFieldsValue({
            ...objectForm,
            img: url
        })
    }
    const handleSubmit = () => {
        //  bắt có lỗi không nếu không chúng ta thêm 
        const ListError = formElemt.current.getFieldsError();
        const LengthError = ListError.filter((error) => error.errors.length > 0);
        if (!LengthError.length &&
            objectForm.img !== "" &&
            objectForm.name !== "" &&
            objectForm.price !== ""
        ) {
            const Notification =
                `${objectForm.name} đã ${type === "Add products" ? "thêm" : "sửa"} vào phần Products`;
            dispatch(addProduct(objectForm));
            dispatch(resetProduct());
            dispatch(close());
            dispatch(addNotification(Notification))
            openNotification(Notification);
        } else {
            openNotification("Form có lỗi !");
        }
    }
    useEffect(() => {
        name.current.focus();
        formElemt.current.setFieldsValue(product);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Modal
                title={type}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Thêm"
                cancelText="Hủy bỏ"
            >
                <h3 className={Styles.title}>
                    {type === "Add products" ? "Thêm sản phẩm" : "Sửa sản phẩm"}
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
                        name={'img'}
                        label="Upload [.png ,.jpg ,.jpeg ,.jfif]"
                        tooltip="Hãy upload ảnh tại đây !"
                    >
                        <Upload url={objectForm.img} onUpload={handleUpload} />
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="Tên sản phẩm"
                        tooltip="Hãy nhập tên sản phẩm tại đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Hãy nhập tên sản phẩm tại đây " ref={name} />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Giá sản phẩm "
                        tooltip="Hãy nhập giá sản phẩm tại đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Hãy nhập giá sản phẩm tại đây " />
                    </Form.Item>
                    <button type="submit" className={Styles.btnSubmit}></button>
                </Form>
            </Modal>
        </>
    );
}

export default AddOrder;