import { ThongTinLichChieu } from '../../_core/model/ThongTInPhongVe';
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from '../types/QuanLiDatVeTypes'

const STATE_DEFAULT = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    danhSachGheKhachDat: [],
    tabActive: '1'
}

export const QuanLiDatVeReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state };
        }
        case DAT_VE: {
            //Cập nhật danh sách ghế đang đặt
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];

            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
            if (index != -1) {
                //Nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi => xoá đi
                danhSachGheCapNhat.splice(index, 1);

            } else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }

        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangDat = [];
            return { ...state }
        }
        case CHUYEN_TAB : {
            state.tabActive = '2';
            return {...state};
        }

        case 'CHANGE_TAB_ACTIVE' : {
            console.log('action',action)
            state.tabActive = action.number;
            return {...state};
        }

        case 'DAT_GHE' : {
            state.danhSachGheKhachDat = action.arrGheKhachDat;
            return {...state}
        }
        default: return { ...state }
    }
}