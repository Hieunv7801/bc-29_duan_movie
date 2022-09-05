const STATE_DEFAUT = {
    arrCarousel: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
          },
]}

export const CarouselReducer = (state = STATE_DEFAUT, action) => {
    switch (action.type) {
        case 'SET_CAROUSEL': {
            state.arrCarousel = action.arrCarousel;
            return {...state}
        }
        default: return {...state}
    }
}