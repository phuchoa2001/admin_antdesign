import { createSlice } from '@reduxjs/toolkit';
export const useModal = createSlice({
    name: "useModal",
    initialState: {
        Modal: false,
        type: "",
        data: [],
    },
    reducers: {
        open: (state, action) => {
            state.type = action.payload.type;
            state.data = action.payload.data || [];
            state.Modal = true;
        },
        close: (state, action) => {
            state.Modal = false;
            state.data = [];
            state.type = ""
        },
    }
})
export const {
    open, close
} =
    useModal.actions;
export default useModal.reducer;