import { fetchListTicketApi, fetchTicketApi } from "../../services/tickets";
import { ThongTinDatVe } from "../../_core/model/ThongTinDatVe";
import { DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../types/QuanLiDatVeTypes";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";



export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
           

            const result = await fetchListTicketApi(maLichChieu);
            
            console.log('sol', result)
            //* sau khi lấy dữ liệu từ api về sẽ đưa lên redux
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                });
            }

            console.log('result', result);
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)

            const result = await fetchTicketApi(thongTinDatVe);

             console.log(result.data.content);
            //Đặt vé thành công gọi api load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({type:DAT_VE_HOAN_TAT})
            await dispatch(hideLoadingAction);

        } catch (error) {
            console.log(error.response.data)
        }
    }
}