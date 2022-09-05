import { request } from "../configs/axios";
import { ThongTinDatVe } from "../_core/model/ThongTinDatVe";

export const fetchListTicketApi = (maLichChieu) => { //* lấy từ params
    return request({
        url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: 'GET',     
    });
};

export const fetchTicketApi = (thongTinDatVe = new ThongTinDatVe()) => { //* lấy từ params
    return request({
        url: `/QuanLyDatVe/DatVe`,
        method: 'POST',     
        data: thongTinDatVe
    });
};

export const taoLichChieu = (thongTinLichChieu) => { //* lấy từ params
    return request({
        url: `/QuanLyDatVe/TaoLichChieu`,
        method: 'POST',     
        data: thongTinLichChieu
    });
};

