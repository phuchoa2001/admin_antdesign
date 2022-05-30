import { createSlice } from '@reduxjs/toolkit';
import ListUsers from '../data/listUser';
import resultRrandomnumber from '../commons/randomnumber';
export const useUsers = createSlice({
    name: "useUsers",
    initialState: {
        list: ListUsers,
        user: {
            key: null,
            email: "",
            username: "",
            password: ""
        }
    },
    reducers: {
        addUser: (state, action) => {
            if (!action.payload.key) {
                // Thêm vào user
                action.payload.key = resultRrandomnumber();
                state.list.push(action.payload);
            } else {
                const IndexAdd = state.list.findIndex((user) => user.key === action.payload.key);
                state.list[IndexAdd] = action.payload;
                // sửa vào user
            }
        },
        editUser: (state, action) => {
            const IndexEdit = state.list.findIndex((user) => user.key === action.payload);
            state.user = state.list[IndexEdit];
        },
        deleteUser: (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                const IndexDelete = action.payload[i];
                const resultIndex = state.list.findIndex((user) => user.key === IndexDelete);
                state.list.splice(resultIndex, 1);
            }
        },
        resetUser: (state, action) => {
            state.user = {
                key: null,
                email: "",
                username: "",
                password: ""
            }
        }
    }
})
export const {
    addUser, editUser, deleteUser , resetUser
} =
    useUsers.actions;
export default useUsers.reducer;