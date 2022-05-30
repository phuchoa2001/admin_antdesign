import React, { useState } from 'react';

import { Row, Col } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import clsx from 'clsx';

import ManiDash from './Maindash';
import SideBar from './Sidebar';
import Styles from './index.module.css';
import Modal from '../Modal';
function Layout(props) {
    const [open, setOpen] = useState(false);
    const handleToogleMenu = () => {
        setOpen(prev => !prev);
    }
    return (
        <div className="App">
            <div className="AppGlass">
                <div
                    className={Styles.BtnMenumobile}
                    onClick={handleToogleMenu}
                    style={{ left: open ? "47%" : "10px" }}
                >
                    <MenuOutlined className={Styles.icon} />
                </div>
                <Row>
                    <Col
                        xxl={{ span: 3 }}
                        xl={{ span: 3 }}
                        lg={{ span: 2 }}
                        md={{ span: 12 }}
                        className={clsx(Styles.SideBar, {
                            [Styles.open]: open
                        })}
                    >
                        <SideBar />
                    </Col>
                    <Col
                        xxl={{ span: 21 }}
                        xl={{ span: 21 }}
                        lg={{ span: 22 }}
                        md={{ span: 24 }}
                        sm={{ span: 24 }}
                        xs={{ span: 24 }}
                    >
                        <ManiDash />
                    </Col>
                </Row>
                <Modal />
            </div>
        </div>
    );
}

export default Layout;