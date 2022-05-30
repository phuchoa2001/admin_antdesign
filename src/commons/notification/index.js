import { notification } from 'antd';
const key = 'updatable';
// Hiện thông báo notification antd
const openNotification = (description) => {
    notification.open({
        key,
        message: "Thông báo",
        description: description,
    });
    setTimeout(() => {
        notification.open({
            key,
            message: 'Thông báo',
            description: description,
        });
    }, 1000);
};

export default openNotification;
