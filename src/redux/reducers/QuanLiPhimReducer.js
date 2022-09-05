import { SET_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../types/QuanLiPhimTypes"
import { SET_CHI_TIET_PHIM } from "../types/QuanLiRapTypes";

const STATE_DEFAULT = {
    arrFilm: [
        {
            "maPhim": 1293,
            "tenPhim": "The Walking Dead 12",
            "biDanh": "the-walking-dead-12",
            "trailer": "https://www.youtube.com/embed/R1v0uFms68U",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-walking-dead-1_gp00.jpg",
            "moTa": "The Walking Dead 1 phần 1-1",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2022-06-20T17:05:53.727",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
        },
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    filmDetail: {},

    thongTinPhim:{}

}

export const QuanLiPhimReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm
            return { ...state }
        }
        case SET_PHIM_DANG_CHIEU: {

            state.dangChieu = !state.dangChieu;
            state.arrFilm = state.arrFilmDefault.filter(film =>
                film.dangChieu === state.dangChieu);

            return { ...state }
        }
        case SET_PHIM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu;
            state.arrFilm = state.arrFilmDefault.filter(film =>
                film.sapChieu === state.sapChieu);

            return { ...state }
        }
        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail;
            return {...state}
        }

        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }
        default: return { ...state }
    }
}