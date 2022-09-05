import { TOKEN, USER_LOGIN } from "../../constant/common";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLiNguoiDungTypes"

let user = {};

//* nếu tồn tại người dùng khỏi đăng nhập nữa
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}



const STATE_DEFAULT = {
    userLogin: user,
    thongTinNguoiDung: {

    }
}   

export const QuanLiNguoiDungReducer = (state = STATE_DEFAULT, action) => {
        switch (action.type) {
            case DANG_NHAP_ACTION : {
                const {thongTinDangNhap} = action;
                localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
                localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
                return {...state, userLogin:thongTinDangNhap}
            }
            case SET_THONG_TIN_NGUOI_DUNG : {
                state.thongTinNguoiDung = action.thongTinNguoiDung;
                return {...state}
            }
            default: return {...state}
        }
}