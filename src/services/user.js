import { request } from "../configs/axios";


export const fetchListUserApi = (data) => {
    return request({
        data: data,
        url: `/QuanLyNguoiDung/DangNhap`,
        method: 'POST',     
    });
};

export const fetchThongTinNguoiDungApi = () => {
    return request({
        url: `/QuanLyNguoiDung/ThongTinTaiKhoan`,
        method: 'POST',     
    });
};