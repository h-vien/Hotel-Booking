import { Button, Image, Upload } from "antd";
import React, { useState } from "react";
import { getImageUpload } from "../utils/cloudinary";
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const UploadImage = ({ onChange }) => {
  const [progress, setProgress] = useState(0);
  const handleUpload = async ({ file }) => {
    try {
      setProgress(0);
      const data = await getImageUpload(file, setProgress);
      const src = data?.url;
      if (src) {
        onChange({
          url: data?.url,
          publicId: data?.public_id,
          description: file?.name,
          width: data?.width,
          height: data?.height,
        });
        setProgress(100);
      }
    } catch (error) {
      console.log("err");
    }
  };
  return (
    <Upload
      accept="image/*"
      customRequest={handleUpload}
      showUploadList={false}
      progress={{
        strokeWidth: 4,
      }}
    >
      <Button icon={<UploadOutlined />}>
        {progress === 100 ? "Tải lên" : "Đang tải"}
      </Button>
    </Upload>
  );
};

export default UploadImage;
