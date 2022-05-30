import React, { useEffect, useState } from 'react';

import { Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';

import convertFileBase64 from '../../commons/convertfilebase64';
function UploadImage({ url, onUpload }) {
    const [fileList, setFileList] = useState([]);
    useEffect(() => {
        if (url) {
            const fileimage = {
                uid: '20002',
                name: 'image.png',
                status: 'done',
                thumbUrl: url,
            }
            setFileList([fileimage])
        }
    }, [url])
    const props = {
        beforeUpload: async (file) => {
            const isPNG = file.type === "image/png"
                || file.type === "image/jpeg";

            if (!isPNG) {
                message.error(`${file.name} không phải là .png,.jpg,.jfif`);
            } else {
                file.thumbUrl = await convertFileBase64(file);
                props.saveImgae(file);
                onUpload(file.thumbUrl);
            }
        },
        onRemove: () => {
            setFileList([])
        },
        saveImgae: (file) => {
            file.status = "done";
            setFileList([file]);
        }
    }

    return (
        <ImgCrop rotate modalWidth={300} quality={1}>
            <Upload
                listType="picture-card"
                fileList={fileList}
                accept="image/*"
                maxCount={1}
                {...props}
            >
                {fileList.length < 5 && '+ Upload'}
            </Upload>
        </ImgCrop>
    );
}

export default UploadImage;