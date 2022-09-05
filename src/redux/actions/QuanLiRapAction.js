import { fetchListCimenaApi, layThongTinLichChieuPhimApi } from "../../services/cimena";
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP } from "../types/QuanLiRapTypes";

export const layDanhSachHeThongRapAction = () => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await fetchListCimenaApi();
            //* sau khi lấy dữ liệu từ api về sẽ đưa lên redux
             dispatch({
                 type:SET_HE_THONG_RAP,
                 heThongRapChieu:result.data.content
             })
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}

export const layThongTinChiTietPhimAction = (id) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await layThongTinLichChieuPhimApi(id);
            //* sau khi lấy dữ liệu từ api về sẽ đưa lên redux
             dispatch({
                 type:SET_CHI_TIET_PHIM,
                 filmDetail:result.data.content
             })
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}