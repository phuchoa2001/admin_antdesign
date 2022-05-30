import { createSlice } from '@reduxjs/toolkit';
import listProduct from '../data/listProduct';
import resultRrandomnumber from '../commons/randomnumber';
export const useProducts = createSlice({
    name: "useProducts",
    initialState: {
        list: listProduct,
        product: {
            key: null,
            email: "",
            username: "",
            password: ""
        },
        search: '',
    },
    reducers: {
        addProduct: (state, action) => {
            if (!action.payload.key) {
                // Thêm vào Product
                action.payload.key = resultRrandomnumber();
                state.list.push(action.payload);
            } else {
                const IndexAdd = state.list.findIndex((product) => product.key === action.payload.key);
                state.list[IndexAdd] = action.payload;
                // sửa vào Product
            }
        },
        editProduct: (state, action) => {
            const IndexEdit = state.list.findIndex((product) => product.key === action.payload);
            state.product = state.list[IndexEdit];
        },
        deleteProduct: (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                const IndexDelete = action.payload[i];
                const resultIndex = state.list.findIndex((product) => product.key === IndexDelete);
                state.list.splice(resultIndex, 1);
            }
        },
        searchProduct: (state, action) => {
            state.search = action.payload;
        },
        resetProduct: (state, action) => {
            state.product = {
                key: null,
                email: "",
                username: "",
                password: ""
            }
        }
    }
})
export const {
    addProduct, editProduct, deleteProduct, searchProduct, resetProduct
} =
    useProducts.actions;
export default useProducts.reducer;