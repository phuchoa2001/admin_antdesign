import { createSlice } from '@reduxjs/toolkit';
export const useNotification = createSlice({
    name: "useNotification",
    initialState: {
        list: [],
    },
    reducers: {
        addNotification: (state, action) => {
            state.list.push(action.payload);
        },
    }
})
export const {
    addNotification
} =
    useNotification.actions;
export default useNotification.reducer;