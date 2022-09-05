import { request } from "../configs/axios";


export const fetchListMovieApi = () => {
    return request({
        url: `/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        method: 'GET',
    });
};
