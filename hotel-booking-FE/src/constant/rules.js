import { isEmail } from "../utils/helper";

export const rules = {
  name: [
    {
      required: true,
      message: "Trường này không được bỏ trống",
    },
    {
      max: 120,
      message: "Tên có độ dài tối đa 120 kí tự",
    },
  ],
  textarea: [
    {
      required: true,
      message: "Trường này không được bỏ trống",
    },
    {
      max: 1000,
      message: "Tên có độ dài tối đa 1000 kí tự",
    },
  ],
  userName: [
    {
      required: true,
      message: "Trường này không được bỏ trống",
    },
    {
      max: 8,
      message: "Username tối đa 8 kí tự",
    },
  ],
  email: [
    { required: true, message: "Vui lòng nhập Email" },
    { pattern: isEmail(), message: "Vui lòng nhập đúng định dạng Email" },
  ],
  password: [
    {
      required: true,
      message: "Vui lòng nhập password",
    },
    {
      min: 5,
      max: 10,
      message: "Password từ 6 đến 10 kí tự",
    },
  ],
};
