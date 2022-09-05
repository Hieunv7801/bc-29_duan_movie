import { fetchListUserApi, fetchThongTinNguoiDungApi } from "../../services/user";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLiNguoiDungTypes";


export const dangNhapAction = (thongTinNguoiDung) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await fetchListUserApi(thongTinNguoiDung);
            //* sau khi lấy dữ liệu từ api về sẽ đưa lên redux
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                });
            }

            console.log('result', result);
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}

export const layThongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await fetchThongTinNguoiDungApi();
            //* sau khi lấy dữ liệu từ api về sẽ đưa lên redux
            if (result.data.statusCode === 200) {
                dispatch({
                    type:SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });
            }
            console.log('result', result);
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}