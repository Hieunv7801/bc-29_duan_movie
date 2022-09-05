import { request } from "../../configs/axios";
import { fetchBannerMovieApi } from "../../services/banner";
import { SET_CAROUSEL } from "../types/CarouselTypes";

export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await fetchBannerMovieApi();

             dispatch({
                 type:SET_CAROUSEL,
                 arrCarousel:result.data.content
             })
        }catch (errors) {
            console.log('errors',errors)
        }
    };
};