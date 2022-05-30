import { createSlice } from '@reduxjs/toolkit';


import ListOrder from '../data/listOrder';
import resultRrandomnumber from '../commons/randomnumber';
export const useOrder = createSlice({
    name: "useOrder",
    initialState: {
        list: ListOrder,
        order: {
            key: null,
            name: "",
            price: "",
            address: ""
        }
    },
    reducers: {
        addOrder: (state, action) => {
            if (!action.payload.key) {
                // Thêm vào order
                action.payload.key = resultRrandomnumber();
                state.list.push(action.payload);
            } else {
                const IndexAdd = state.list.findIndex((order) => order.key === action.payload.key);
                state.list[IndexAdd] = action.payload;
                // sửa vào order
            }
        },
        editOrder: (state, action) => {
            const IndexEdit = state.list.findIndex((order) => order.key === action.payload);
            state.order = state.list[IndexEdit];
        },
        deleteOrder: (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                const IndexDelete = action.payload[i];
                const resultIndex = state.list.findIndex((order) => order.key === IndexDelete);
                state.list.splice(resultIndex, 1);
            }
        },
        resetOrder: (state, action) => {
            state.order = {
                key: null,
                name: "",
                price: "",
                address: ""
            }
        }
    }
})
export const {
    addOrder, deleteOrder, editOrder , resetOrder
} =
    useOrder.actions;
export default useOrder.reducer;