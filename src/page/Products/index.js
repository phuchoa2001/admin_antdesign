import React, { useState } from 'react';

import { Input, Button, Pagination, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { open } from '../../redux/useModal';
import { searchProduct } from '../../redux/useProducts';

import Styles from './index.module.css';
import Item from './Item';

const pageSize = 6;
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
const Products = (props) => {
    const [current, setCurrent] = useState(1);
    const Products = useSelector(state => state.Products);
    const ListProducts = Products.list;
    const searchProducts = Products.search;
    const List = ListProducts.filter(
    (product) => product.name.toLowerCase().indexOf(searchProducts.toLowerCase()) !== -1);
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(open({
            type: "Add products"
        }));
    }
    const getData = (current, pageSize) => {
        // Search of getData
        return List.slice((current - 1) * pageSize, current * pageSize);
    };
    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(searchProduct(value));
        setCurrent(1);
    }
    return (
        <div className='wrapperMaindash' >
            <h1 className="heading-text--large">Danh Sách Products</h1>
            <MyPagination
                total={List.length}
                current={current}
                onChange={setCurrent}
                className={Styles.Pagination}
            />
            <div className={Styles.action}>
                <Button
                    type="primary"
                    className={Styles.BtnAdd}
                    onClick={handleAdd}
                >
                    Thêm sản phẩm
                </Button>
                <Input
                    placeholder="Tìm kiếm"
                    prefix={<SearchOutlined />}
                    className={Styles.search}
                    onChange={handleChange}
                    value={searchProducts}
                />
            </div>
            <div className={Styles.ListProduct} >
                <Row gutter={16}>
                    {getData(current, pageSize).map((product) =>
                        <Col 
                        key={product.key} 
                        xxl={{ span: 8 }} 
                        xl={{ span: 8 }} 
                        lg={{ span: 8 }} 
                        md={{ span: 12 }} 
                        sm={{ span: 24 }} 
                        xs={{ span: 24 }}>
                            <Item
                                keys={product.key}
                                img={product.img}
                                name={product.name}
                                price={product.price}
                            />
                        </Col>
                    )}
                </Row>
            </div>
        </div>
    );
}

export default Products;