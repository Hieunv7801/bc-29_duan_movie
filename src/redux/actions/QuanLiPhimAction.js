import { fetchListMovieApi } from "../../services/movie";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../types/QuanLiPhimTypes";
import { capNhatPhimUpload, layDanhSachPhim, layThongTinPhim, themPhimUploadHinh, xoaPhim } from "../../services/banner";

export const layDanhSachPhimAction = (tenPhim='') => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await layDanhSachPhim(tenPhim);
            //* sau khi lấy dữ liệu từ api về sẽ đưa lên redux
             dispatch({
                 type:SET_DANH_SACH_PHIM,
                 arrFilm:result.data.content
             })
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}
export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {


            let result = await themPhimUploadHinh(formData);
            alert('Thêm phim thành công!')
            console.log('result', result.data.content);


            
        } catch (errors) {
            console.log(errors.response?.data)
        }
    }
}


export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {


            let result = await capNhatPhimUpload(formData);
            alert('Cập nhật phim thành công!')
            console.log('result', result.data.content);

            dispatch(layDanhSachPhimAction());    
        } catch (errors) {
            console.log(errors.response?.data)
        }
    }
}



export const layThongTinPhimAction =  (maPhim) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await layThongTinPhim(maPhim);

   

            dispatch({
                type:SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content

            })
            
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}



export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await xoaPhim(maPhim);
            console.log('result',result.data.content);
            alert('Xoá phim thành công !');
            //Sau khi xoá load lại danh sách phim mới;
            dispatch(layDanhSachPhimAction())
            
        }catch (errors) {
            console.log('errors',errors.response?.data)
        }
    }
}