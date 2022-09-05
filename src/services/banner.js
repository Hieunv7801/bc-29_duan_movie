import { request } from "../configs/axios";


export const fetchBannerMovieApi = () => {
    return request({
        url: `/QuanLyPhim/LayDanhSachBanner`,
        method: 'GET',
    });
};
export const layDanhSachPhim = (tenPhim='') => {
    if(tenPhim.trim() != ''){
        return request({
            url: `/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`,
            method: 'GET',
        });
    }
    return request({
        url: `/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        method: 'GET',
    });
};
export const themPhimUploadHinh = (formData) => {
    return request({
        url: `/QuanLyPhim/ThemPhimUploadHinh`,
        method: 'POST',
        data: formData
    });
};
export const layThongTinPhim = (maPhim) => {
    return request({
        url: `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: 'GET',
    });
};

export const capNhatPhimUpload = (formData) => {
    return request({
        url: `/QuanLyPhim/CapNhatPhimUpload`,
        method: 'POST',
        data: formData
    });
};
export const xoaPhim = (maPhim) => {
    return request({
        url: `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: 'DELETE',
    });
};