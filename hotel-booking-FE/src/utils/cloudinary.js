import axios from "axios";

const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;
const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;

export const getImageUpload = async (file, setProgress) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const config = {
    onUploadProgress: (progressEvent) => {
      const total = progressEvent.total;
      const current = progressEvent.loaded;
      let percentCompleted = (current / total) * 100;
      setProgress(percentCompleted);
    },
  };

  try {
    const response = await axios.post(url, formData, config);
    return response.status === 200 ? response.data : null;
  } catch (error) {
    return null;
  }
};
