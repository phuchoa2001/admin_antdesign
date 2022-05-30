import React from 'react';

import { Row, Col } from 'antd';

import Dashboard from './Dashboard';
import RightSide from './Rightside';
function Home(props) {
    return (
        <div className="wrapperMaindash">
            <Row>
                <Col xxl={{ span: 17 }} xl={{ span: 17 }} lg={{ span: 17 }} md={{ span: 17 }} sm={{ span: 24 }} xs={{ span: 24 }}  >
                    <Dashboard />
                </Col>
                <Col xxl={{ span: 7 }} xl={{ span: 7 }} lg={{ span: 7 }} md={{ span: 7 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <RightSide />
                </Col>
            </Row>
        </div>
    );
}

export default Home;