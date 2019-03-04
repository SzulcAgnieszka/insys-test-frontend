import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "../constans/actionTypes";
import axios from 'axios';

export function fetchProducts(page) {
    return dispatch => {
        dispatch(fetchProductsBegin());
        return axios.get("https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?method=flickr.photos.getRecent&per_page=10&tags=marilynmonroe&format=json&nojsoncallback=true")
            .then(response => {
                console.log('response', response.data.items);
                dispatch(fetchProductsSuccess(response.data.items));
                return response.data.items;
            })
            .catch(error => dispatch(fetchProductsError(error)));
    };
}

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = payload => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload
});

export const fetchProductsError = payload => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload
});
