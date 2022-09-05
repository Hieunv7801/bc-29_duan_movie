import { applyMiddleware,compose, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLiPhimReducer } from "./reducers/QuanLiPhimReducer";
import { QuanLiRapReducer } from "./reducers/QuanLiRapReducer";
import { QuanLiNguoiDungReducer } from "./reducers/QuanLiNguoiDungReducer";
import { QuanLiDatVeReducer } from "./reducers/QuanLiDatVeReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";

const rootReducer = combineReducers({
    //state ứng dụng
    CarouselReducer,
    QuanLiPhimReducer ,
    QuanLiRapReducer,
    QuanLiNguoiDungReducer,
    QuanLiDatVeReducer,
    LoadingReducer
})

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));