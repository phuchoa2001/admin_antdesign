import React from 'react';
import { useSelector } from 'react-redux';
import { Empty } from 'antd';

import Styles from './index.module.css';
import Upload from './Upload';
function RightSide(props) {
    const ListNotification = useSelector(state => state.Notification.list);
    return (
        <div className={Styles.RightSide}>
            <h3 className="heading-text">Updates</h3>
            <div className={Styles.listUpload}>
                {ListNotification.length > 0 ?
                    ListNotification.map((content, index) =>
                        <Upload content={content} key={index} />
                    ) : <Empty description="Không có thông báo" />}
            </div>
        </div>
    );
}

export default RightSide;