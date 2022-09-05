import { request } from "../configs/axios";


export const fetchListCimenaApi = () => {
    return request({
        url: `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
        method: 'GET',
    });
};

export const layThongTinLichChieuPhimApi = (maPhim) => {
    return request({
        url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: 'GET',
    });
};

export const layThongTinHeThongRap = () => {
    return request({
        url: `/QuanLyRap/LayThongTinHeThongRap`,
        method: 'GET',
    });
};

export const layThongTinCumRap = (maHeThongRap) => {
    return request({
        url: `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
        method: 'GET',
    });
};
