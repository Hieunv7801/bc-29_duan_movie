import { DISPLAY_LOADING, HIDE_LOADING } from "../types/LoadingTypes";

const STATE_DEFAULT = {
    isLoading: false
}



export const LoadingReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case DISPLAY_LOADING:{
            state.isLoading = true;
            return {...state}
        };
        case HIDE_LOADING:{
            state.isLoading = false;
            return {...state}
        }
        default: {
            return {...state}
        }
    }
}