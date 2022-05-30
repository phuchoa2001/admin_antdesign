import { Button, Result } from 'antd';
import { useHistory } from "react-router-dom";


function Link404() {
    let history = useHistory();
    function handleClick() {
        history.push("/");
      }
    return (
        <Result
            status="404"
            title="404"
            subTitle="xin lỗi không có trang này"
            extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
        />
    )
}
export default Link404;