import { SET_HE_THONG_RAP } from "../types/QuanLiRapTypes"

const STATE_DEFAULT = {
    heThongRapChieu: []
}

export const QuanLiRapReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP: {
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state}
        }
        default: return {...state}
    }
}