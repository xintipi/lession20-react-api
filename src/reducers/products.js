import * as Types from './../constants/ActionType';
import _ from 'lodash';

const initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            // kiem tra dispatch action tu ham "fetchAllProducts"
            state = action.products;
            // luu mang product tren store
            // return du lieu ra "mapStateToProps"
            return [...state];
        case Types.DELETE_PRODUCT:
            // xoa phan tu product da xac dinh tren store
            _.remove(state, (product) => { return product.id === action.id });
            // return du lieu mang moi
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            let result = _.findIndex(state, function(product) { return product.id === action.product.id; });
            state[result] = result !== -1 ? action.product : null;
            return [...state];
        default: return [...state];
    }
};

export default products;