import React from 'react';

import { Comment, Avatar } from 'antd';

function Upload({ content }) {
    return (
        <Comment
            author={<a href="#!">Admin</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <p>
                    {content}
                </p>
            }
        />
    );
}

export default Upload;